import styled from "styled-components";

export const CardListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    background-color: rgb(220,220,220);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    padding: 2vh;
  }

  & button {
    margin: 20px;
    padding: 8px 32px;
    border: 3px solid rgb(180,0,0);
    background-color: rgb(255,255,255);
    color: rgb(180,0,0);
    border-radius: 7px;
    font-family: monospace;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      background-color: rgb(200,200,200);
      color: rgb(255,0,0);
      border-color: rgb(255,0,0);
    }
  }

  & h2 {
    color: rgb(180,0,0);
  }
`;

export const StyledUl = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 15px;
  }

  @media only screen and (max-width: 768px) {
    height: 62vh;
  }
`;
