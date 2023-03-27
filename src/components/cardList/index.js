import Card from "../card"
import { StyledUl } from "./style"

export default function CardList({ cardsArray }) {
  return (
    <StyledUl>
      {cardsArray.map(card => <li><Card imageSrc={card.image}/></li>)}
    </StyledUl>
  )
}