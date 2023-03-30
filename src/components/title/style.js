import styled from "styled-components";

export const TitleDiv = styled.div`
  margin: 3vh 3vh 0 3vh;
  width: 18vw;

  & > div {
    width: 15vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1vh;
    margin: 0 auto;
  }

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

  & p {
    color: rgb(180,0,0);
    text-align: center;
    margin: 1vh;
  }
`