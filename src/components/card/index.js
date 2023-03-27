import { StyledImg } from "./style"

export default function Card({ imageSrc }) {
  return (
    <StyledImg src={imageSrc} alt="Card" />
  )
}