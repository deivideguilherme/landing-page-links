import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .videoBackground {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: fixed;
    z-index: -2;
  }

  .navbar-items {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem; // 1rem = 16px
    padding: 0 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 120px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);

    a {
      z-index: -1;
    }

    .logo-links {
      margin: 20px 0 0 50px;
      width: 250px;
      justify-self: start;
      cursor: pointer;
    }

    .nav-menu {
      display: grid;
      grid-template-columns: repeat(6, auto);
      grid-gap: 1px;
      align-items: center;
      text-align: center;
      justify-content: end;
      list-style: none;
      margin-right: 50px;

      .nav-links {
        text-decoration: none;
        color: var(--septenary-color);
        padding: 0.5rem 1rem;
        white-space: nowrap;

        /* i {
          padding-right: 7px;
        } */
      }

      .nav-links:hover {
        background: rgba(23, 133, 130, 0.25);
        border-radius: 8px;
        transition: all 0.2s ease-in-out;
      }
    }

    .menu-icons {
      display: none;

      .fa-bars {
        color: var(--septenary-color);
      }
    }

    @media screen and (max-width: 980px) {
      .navbar-items {
        z-index: 99;
      }

      .nav-menu {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: rgba(0, 0, 0, 0.5);
        box-shadow: 0 2px 10px 0px rgba(23, 133, 130, 0.5);
        backdrop-filter: blur(4px);
        border-radius: 15px;
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        left: -110%;
        align-items: stretch;
        padding: 80px 0 30px 0;
        margin: 0;
        z-index: -1;
        transition: all 0.3s ease-in-out;
      }

      .nav-menu.active {
        left: 0%;
      }

      .nav-links {
        display: block;
        widows: 100%;
        padding: 2rem 0; // 1rem = 16px -> 2 * 16 = 32px
        color: #222;

        .nav-links:hover {
          background-color: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(20px);
        }
      }

      .menu-icons {
        display: block;
        color: var(--septenary-color);
      }
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
`;

export const Home = styled.section`
  /* border: 1px solid #fff; */
  height: 400px;
  width: 100%;
  margin-top: 20%;
  z-index: -1;
  padding: 80px 0 0 150px;

  .fixed-text {
    border: 1px solid #fff;
    display: inline-block;
    font-size: 2rem;
    color: var(--septenary-color);
  }

  .animated-text {
    border: 1px solid #fff;
    display: inline-block;
    font-size: 2rem;
    color: var(--septenary-color);
    margin-left: 10px;
  }

  .apresentation-text {
    width: 35%;
    border: 1px solid #fff;
    font-size: 1.25rem;
    color: var(--septenary-color);
  }

  @keyframes blinking-cursor {
    50% {
      border-right-color: transparent;
    }
  }

  @keyframes write {
    20% {
      width: 26.5ch;
    }
    70% {
      width: 26.5ch;
    }
    85% {
      width: 0;
    }
    100% {
      width: 0;
    }
  }

  @keyframes text-exchange {
    0%,
    20% {
      content: "Excelência";
    }
    21%,
    40% {
      content: "Eficiência";
    }
    41%,
    60% {
      content: "Confiabilidade";
    }
    61%,
    80% {
      content: "Profissionalismo";
    }
    81%,
    100% {
      content: "Dedicação";
    }
  }

  .logo-linux-pro {
    width: auto;
    margin-top: 30px;
    margin-left: 40%;
    display: flex;
    justify-content: center;

    img {
      width: 150px;
    }
  }
`;

export const ContainerWhats = styled.div`
  .icon-whats {
    position: fixed;
    bottom: 60px;
    right: 30px;
    font-size: 30px;
    background-color: var(--whats-color1);
    color: var(--whats-color2);
    border-radius: 50%;
    padding: 1px;
    width: 45px;
    height: 45px;
    text-align: center;
    text-decoration: none;
    z-index: 100;
    /* box-shadow: 1px 0.2px 1px #c0bdbd; */
    opacity: 0.7;
  }

  .fa-brands {
    padding-bottom: 4px;
    padding-left: 2px;
  }

  .icon-whats:hover {
    background-color: var(--whats-color2);
    color: var(--whats-color1);
    font-weight: 900;
    /* box-shadow: 1px 0.2px 15px; */
  }
`;

export const Services = styled.section``;

export const Company = styled.section``;

export const Title = styled.h2``;

export const Contact = styled.div``;

export const Form = styled.form``;

export const Rodape = styled.footer``;
