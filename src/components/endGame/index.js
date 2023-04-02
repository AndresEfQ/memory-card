import Card from "../card";
import { StyledDiv } from "./style"

export default function EndGame({ card, handleResetGame }) {
  console.log(card)
  return (
    <StyledDiv>
      <div>
        <div>
          <h2>Game Over</h2>
          <p>It looks like you really liked</p>
        </div>
        <Card card={card} ></Card>
        <div>
          <button onClick={handleResetGame}>New Game</button>
        </div>
      </div>
    </StyledDiv>
  )
}