import Tilt from "react-parallax-tilt";
import { StyledImg } from "./style";

export default function Card({ card, handleListScore }) {

  return (
    <Tilt glareEnable={true}>
      <StyledImg src={card.image} alt="Card" onClick={() => handleListScore(card.id)} />
    </Tilt>
  )
}