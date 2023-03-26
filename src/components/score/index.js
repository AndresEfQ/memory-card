import { ScoreDiv } from "./style"

export default function Score({ score }) {
  return (
    <ScoreDiv>
      <span>Level: {score.level}</span>
      <span>Score: {score.currentScore}</span>
      <span>Max Score: {score.maxScore}</span>
    </ScoreDiv>
  )
}