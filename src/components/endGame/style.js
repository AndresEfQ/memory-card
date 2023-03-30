import styled from "styled-components";

export const StyledDiv = styled.div`

  margin-top: -10vh;

    & > div {
      color: rgb(180,0,0);
      font-weight: 700;
      font-family: monospace;
      font-size: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > * {
        margin: 5px;
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