import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import fakeData from './assets/fakeData';
import Title from './components/title';
import Score from './components/score';
import CardList from './components/cardList';

function App() {

  const [data, setData] = useState();
  const [score, setScore] = useState({
    level: 1,
    currentScore: 0,
    maxScore: 0,
  });

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
      setData(response.slice(0,9));
    })
    .catch(err => console.error(err)); */

    setData(fakeData);
  }, [])


  return (
    <div className="App">
      <div>
        <Title />
        <Score score={score} />
      </div>

      {data ? <CardList cardsArray={data} /> : <span>Loading...</span>}
    </div>
  );
}

export default App;
