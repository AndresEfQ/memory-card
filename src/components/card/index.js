import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { StyledCard } from "./style";
import failImg from "../../assets/images/film-roll.png"

export default function Card({ card, handleListScore }) {

  const [src, setSrc] = useState(card.image);

  return (
    <StyledCard>
      <Tilt glareEnable={true}>
        {src === failImg && <h2>
          We couldn't find the poster, but this should be <span>{card.title}</span>
        </h2>}
        <img
          src={src}
          alt="Card"
          onClick={() => handleListScore(card.id)}
          onTouchStart={() => handleListScore(card.id)}
          onError={() => setSrc(failImg)}
        />
      </Tilt>
    </StyledCard>
  )
}