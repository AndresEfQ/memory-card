import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import fakeData from './assets/fakeData';
import Title from './components/title';
import Score from './components/score';
import CardList from './components/cardList';
import Footer from './components/footer';
import LevelScore from './components/levelScore';
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
  const [isLost, setIsLost] = useState(false);

  
  /**
   * useEffect with empty dependencies array to be called on component mount,
   * should fetch the top 100 movies from imbd database, set the response
   * in state, calculate a random subset with 4 elements and set it in state.
   */

  useEffect(() => {

    /* fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4165133decmsh137698797f8d8bbp141355jsna36576be96fd',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    })
    .then(response => response.json())
    .then(response => {

      /**  
       * randomize returns an array of length length formed by random
       * elements from the array
       */

      /*setResponse(response);
      setImagesArray(randomize({array: response, length: 4}));

    })
    .catch(err => console.error(err)); */

    setResponse(fakeData);
    setImagesArray(randomize({array: fakeData, length: 6}));
  }, [])

  const handleEshaustedList = () => {

    setScore(prevScore => {
      return {
        ...prevScore,
        level: prevScore.level + 1,
      }
    });

    const cardsNumber = 2 + (score.level * 2)

    setImagesArray(randomize({array: response, length: cardsNumber}))
  }

  return (
    <div className="App">
      <div>
        <Title />
        <Score score={score} />
      </div>
      {imagesArray ? 
      <CardList
        cardsArray={imagesArray} 
        level={score.level}
        setIsEshaustedList={handleEshaustedList}
        setIsLost={setIsLost} 
        /> :
      <span>Loading...</span>}
      <Footer />
    </div>
  );
}

export default App;
