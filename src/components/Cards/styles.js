import styled from "styled-components";

export const Cards = styled.div`
  color: #ddd;
  cursor: pointer;

  .app-card {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    background: rgba(255, 255, 255, 0.5);
    padding: 3rem 2rem;
    margin: 20px;
  }

  .card:hover {
    opacity: 0.8;
  }

  .card:active {
    opacity: 0.5;
  }

  .icon-services {
    width: 90px;
    height: 60px;
  }

  .title,
  .icon-services {
    font-size: 1rem;
    text-align: center;
    color: var(--quinary-color);
  }

  .card p {
    padding-top: 1rem;
    line-height: 150%;
    text-align: justify;
    text-indent: 2rem;
  }

  .expand {
    width: 40rem;
  }
`;
