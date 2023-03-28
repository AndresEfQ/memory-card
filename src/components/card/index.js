import Tilt from "react-parallax-tilt";
import { StyledImg } from "./style";

export default function Card({ imageSrc }) {
  return (
    <Tilt glareEnable={true}>
      <StyledImg src={imageSrc} alt="Card" />
    </Tilt>
  )
}