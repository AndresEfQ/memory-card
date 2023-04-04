import { useEffect, useState } from "react";
import shuffleArray from "../../functions/shuffleArray";
import LevelScore from "../levelScore";
import Card from "../card";
import { CardListContainer, StyledUl } from "./style";

export default function CardList({ cardsArray, level, handleGlobalScore, handleExhaustedList, handleLost }) {

  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(cardsArray.map(card => {
    return ({
      id: card.id,
      title: card.title,
      image: card.image,
      isSelected: false,
    })
  }))

  useEffect(() => {
    if (cards.every(card => card.isSelected)) {
      console.log("exhausted");
      setScore(0);
      handleExhaustedList();
    }
  }, [cards])

  useEffect(() => {
    setCards(cardsArray.map(card => {
      return ({
        id: card.id,
        title: card.title,
        image: card.image,
        isSelected: false,
      });
    }));
  }, [cardsArray])

  const handleListScore = (selectedCardId) => {

    window.scrollTo(0, 1);

    const selectedCard = cards.find(card => card.id === selectedCardId)
    if (selectedCard.isSelected) {
      handleLost(selectedCard);
      return;
    }

    setCards(prevSelectedCards => {
      const updatedCards = prevSelectedCards.map(card => {
        if (card.id === selectedCardId) {
          return ({
            id: card.id,
            title: card.title,
            image: card.image,
            isSelected: true,
          });
        } else {
          return card;
        }
      })
      return shuffleArray(updatedCards).sort((a, b) => a.isSelected - b.isSelected);
    });

    setScore(prevScore => prevScore + 1);

    handleGlobalScore();
  }

  return (
    <CardListContainer>
      <StyledUl>
        {shuffleArray(cards.slice(0, 4)).map(card => {
          return (
            <li key={card.id}>
              <Card card={card} handleListScore={handleListScore} />
            </li>
          )
        })}
      </StyledUl>
      <LevelScore level={level} score={score} /> 
    </CardListContainer>
  )
}