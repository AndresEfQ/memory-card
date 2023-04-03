import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import fakeData from './assets/fakeData';
import Title from './components/title';
import Score from './components/score';
import EndGame from './components/endGame';
import CardList from './components/cardList';
import Footer from './components/footer';
import randomize from './functions/randomize';

function App() {

  // This state should hold the entire fetch response
  const [response, setResponse] = useState(); 

  // This state should hold a random number of elements depending on the game level 
  const [imagesArray, setImagesArray] = useState();

  // This state should hold the score
  const [score, setScore] = useState({
    level: 1,
    currentScore: 0,
    maxScore: 0,
  });

  // This state should check if the game is lost
  const [isLost, setIsLost] = useState();

  
  /**
   * useEffect with empty dependencies array to be called on component mount,
   * should fetch the top 100 movies from imbd database, set the response
   * in state, calculate a random subset with 4 elements and set it in state.
   */

  useEffect(() => {

     fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4165133decmsh137698797f8d8bbp141355jsna36576be96fd',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    })
    .then(response => response.json())
    .then(response => {

      if (response.message) {
        console.log("the server has responded", response);
        setResponse(fakeData)
        const fakeImagesArray = randomize({array: fakeData, length: 4})
        setImagesArray(fakeImagesArray);
      } else {
        setResponse(response);
        setImagesArray(randomize({array: response, length: 4}));
      }
       
    })
    .catch(err => {
      console.error("there was an error", err)
    });
    

  }, [])

  const handleExhaustedList = () => {

    setScore(prevScore => {
      return {
        ...prevScore,
        level: prevScore.level + 1,
      }
    });

    setImagesArray(prevImagesArray => {
      return (
        randomize({array: response, length: prevImagesArray.length + 2})
      )
    });
  }

  const handleLost = (card) => {
    setIsLost(card);
  }

  const handleGlobalScore = () => {
    setScore(prevScore => {
      if (prevScore.currentScore + 1 > prevScore.maxScore) {
        return({
          ...prevScore,
          currentScore: prevScore.currentScore + 1,
          maxScore: prevScore.maxScore + 1,
        })
      } else {
        return ({
          ...prevScore,
          currentScore: prevScore.currentScore + 1,
        })
      }
    })
  }

  const handleResetGame = () => {
    setImagesArray(randomize({array: response, length: 4}));
    setScore(prevScore => {
      return {
        ...prevScore,
        level: 1,
        currentScore: 0,
      }
    })
    setIsLost();
  }

  return (
    <div className="App"> 
      <>
        <div>
          <Title />
          <Score score={score} />
        </div>
        {isLost ? <EndGame card={isLost} handleResetGame={handleResetGame} /> :
          response ? <CardList
          cardsArray={imagesArray} 
          level={score.level}
          handleGlobalScore={handleGlobalScore}
          handleExhaustedList={handleExhaustedList}
          handleLost={handleLost}
          /> :
          <span>Loading...</span>
        }
      </> 
      <Footer />
    </div>
  );
}

export default App;
