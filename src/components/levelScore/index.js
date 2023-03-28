import { StyledSpan } from "./style"

export default function LevelScore({ level, score }) {
  return(
    <StyledSpan>{level === 1 ? score : score - 2 - (level * 2)} of {2 + (level * 2)}</StyledSpan>
  )
}