import styled from "styled-components";

export const Cards = styled.div`
  border: 1px solid #000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 50%;
  margin: 20px 5px 20px 5px;

  .card {
    width: 150px;
    background-color: blue;
    padding: 3rem 5rem;
    border-radius: 1rem; //1rem = 16px
  }

  .card p {
    padding-top: 1rem;
    line-height: 150%;
  }

  .expand {
    width: 50rem;
  }
`;
