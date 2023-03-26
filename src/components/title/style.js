import styled from "styled-components";

export const TitleDiv = styled.div`
  margin: 3vh;
  width: 15vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1vh;

  & img {
    height: 5vh;
  }

  & img:first-child {
    height: 7vh;
    width: 100%;
  }

  & img:nth-child(2) {
    margin-left: 0.8vh;
  }
`