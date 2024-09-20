import styled from "styled-components";

export const Cards = styled.div`
  border: 1px solid #000;
  margin: 10px;

  .app-card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
    grid-gap: 20px;
    justify-items: center;
  }
  .card {
    background-color: #fff;
    padding: 1rem;
    border-radius: 2rem; //1rem = 16px
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: visible;
    transition: height 0.3s ease;
  }

  .card p {
    padding-top: 0.5rem;
    line-height: 150%;
    text-align: center;
  }

  .expand {
    width: 400px;
  }
`;
