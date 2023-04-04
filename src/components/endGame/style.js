import styled from "styled-components";

export const StyledDiv = styled.div`

  margin-top: -10vh;
  position: relative;
  
  @media only screen and (max-width: 900px) {
    background-color: rgb(220,220,220);
    margin: 0 5vh;
    border-radius: 16px;
  }

    & > div > div {
      color: rgb(180,0,0);
      font-weight: 700;
      /* font-family: monospace; */
      font-size: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-shadow: 0 0 10px #fff;

      & p {
        color: rgb(80, 80, 80);
      }

      & > * {
        margin: 5px;
        text-align: center;
      }
    }

  
  button {
    border: 3px solid rgb(180,0,0);
    background-color: rgb(255,255,255);
    color: rgb(180,0,0);
    border-radius: 7px;
    font-family: monospace;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
      background-color: rgb(200,200,200);
      color: rgb(255,0,0);
      border-color: rgb(255,0,0);
    }
  }
`;