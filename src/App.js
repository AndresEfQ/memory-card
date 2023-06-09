import './App.css';
import { useState, useEffect } from 'react';
import GridLoader from "react-spinners/GridLoader";
import backupData from './assets/backupData';
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

  const [score, setScore] = useState({
    level: 1,
    currentScore: 0,
    maxScore: 0,
  });

  const [isLost, setIsLost] = useState();

  /**
   * When the app is mounted, it makes the fetch call and sets a random array of 
   * 4 movies for lvl 1 in imagesArray,
   */

  useEffect(() => {

    /**
     * Fetch call to the imdb-top-100-movies api, I'm aware exposing the api key
     * is a bad practice but I didn't want to code the server side for this app,
     * yet I wanted to practice fetching data from an api and asynchronously handling
     * data
     */
     fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0b927fcb83mshf7a96be45fbcb5fp1991bbjsnae6617eb3fdf',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    })
    .then(response => response.json())
    .then(response => {

      /**
       * When the api key gets used up or fails for any reason, the server response
       * has a message, in that case, the app uses the backup data
       */
      if (response.message) {
        console.log("the server has responded", response);
        console.log("The api key has failed, fallig back to backup data")
        setResponse(backupData)
        const backupImagesArray = randomize({array: backupData, length: 4})
        setImagesArray(backupImagesArray);
      } else {
        setResponse(response);
        setImagesArray(randomize({array: response, length: 4}));
      }
       
    })
    .catch(err => {
      console.error("there was an error", err)
    });
    

  }, [])

  /**
   * When each level is completed, this function updates the level in score and 
   * changes the images set for the new level.
   */
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

  /**
   * When a card is repeated, this function sets the isLost state to the repeated card
   * @param {Object} card - The repeated card
   */
  const handleLost = (card) => {
    setIsLost(card);
  }

  /**
   * When the player scores, this function updates the score, if the new score is
   * bigger than max score, max score gets updated too
   */
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

  /**
   * This function resets the score to 0, level to 1 and the set of cards to 4,
   * it keeps the max score.
   */
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
          <GridLoader className='spinner' color="rgb(80, 80, 80)" size={40} />
        }
      </> 
      <Footer />
    </div>
  );
}

export default App;
