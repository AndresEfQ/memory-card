import Card from "../card";
import LevelScore from "../levelScore";
import { useState } from "react";
import { StyledUl } from "./style";

export default function CardList({ cardsArray, level, setIsExhaustedList, setIsLost }) {

  const [score, setScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState(cardsArray.map(card => {
    return ({
      cardId: card.id,
      isSelected: false,
    })
  }))

  const handleScore = (selectedCardId) => {

    if (selectedCards.filter(card => card.id === selectedCardId).isSelected) {
      setIsLost(true);
      return;
    }

    setSelectedCards(prevSelectedCards => prevSelectedCards.map(card => {
      if (card.id === selectedCardId) {
        return ({
          cardId: card.id, 
          isSelected: true,
        });
      } else {
        return card;
      }
    }));

    setScore(prevScore => prevScore + 1);

    if (selectedCards.every(card => card.isSelected)) {
      setIsExhaustedList(true);
    }
  }

  return (
    <>
      <StyledUl>
        {cardsArray.map(card => <li key={card.id}><Card imageSrc={card.image}/></li>)}
      </StyledUl>
      <LevelScore level={level} score={score} /> 
    </>
  )
}