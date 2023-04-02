import styled from "styled-components";

export const CardListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledUl = styled.ul`
  width: 100%;
  padding: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 25px;
  }
`;
