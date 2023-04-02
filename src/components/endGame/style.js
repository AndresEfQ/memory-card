import styled from "styled-components";

export const StyledDiv = styled.div`

  margin-top: -10vh;
  position: relative;

  @media only screen and (max-width: 900px) {
    margin-top: 0;
    margin-bottom: 10px;
  }

    & > div > div {
      color: rgb(180,0,0);
      font-weight: 700;
      font-family: monospace;
      font-size: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-shadow: 0 0 10px #fff;

      & > * {
        margin: 5px;
      }

      @media only screen and (max-width: 900px) {
        &:first-child {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%);
          text-align: center;
          z-index: 2;
        }
      }
    }

  
  button {
    border: 3px solid rgb(180,0,0);
    background-color: rgb(255,255,255);
    color: rgb(180,0,0);
    border-radius: 5px;
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