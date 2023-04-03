import styled from "styled-components";

export const StyledCard = styled.div`

border-radius: 16px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;

& img {
  cursor: pointer;
  width: 90%;
  border-radius: 16px;
    /* position: absolute */
  }

  & h2 {
    width: 90%;
    text-align: center;
    position: absolute;
    color: white;
    text-shadow: 1px 1px 1px #000;
    pointer-events: none;
    margin: 10% 5%;
  }

  & span {
    color: red;
  }

@media only screen and (max-width: 768px) {
  height: 30vh;

  & img {
    height: 30vh;
    width: 40vw;
  }
}
`;