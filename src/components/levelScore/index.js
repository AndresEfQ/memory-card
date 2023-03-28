import { StyledSpan } from "./style"

export default function LevelScore({ level, score }) {
  return(
    <StyledSpan>{score} of {2 + (level * 2)}</StyledSpan>
  )
}