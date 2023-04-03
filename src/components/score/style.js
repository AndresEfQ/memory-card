import styled from "styled-components";

export const ScoreDiv = styled.div`
  width: 10vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media only screen and (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
    width: 100%;

    & > span {
      margin: 20px;
    }
  }

  @media only screen and (max-width: 768px) {

    & > span {
      margin: 10px 20px;
    }
  }
`;