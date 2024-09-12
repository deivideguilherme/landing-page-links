import styled from "styled-components";

export const ContainerMain = styled.div`
  /* border: 1px solid blue; */

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
    font-size: 1.2rem; // 1rem = 16px -> 1.2 * 16 = 19.2px
    padding: 0 30px;
    background-color: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    width: 95%;
    height: 80px;
    border-radius: 15px;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translate(-50%);

    .logo-links {
      margin-top: 15px;
      width: 150px;
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

      .nav-links {
        text-decoration: none;
        color: #000;
        padding: 0.7rem 1rem;
        white-space: nowrap;

        i {
          padding-right: 7px;
        }
      }

      .nav-links:hover {
        background: rgb(80, 80, 238);
        border-radius: 8px;
        transition: all 0.2s ease-in-out;
      }
    }

    .menu-icons {
      display: none;

      .fa-bars {
        color: #000;
      }
    }

    @media screen and (max-width: 850px) {
      .navbar-items {
        z-index: 99;
      }

      .nav-menu {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
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
      }
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
`;

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 200px;

  p {
    font-size: 25px;
    color: #fff;
  }

  .logo-linux-pro {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: end;

    img {
      width: 150px;
    }
  }
`;

export const Services = styled.section``;

export const Company = styled.section``;

export const Title = styled.h2``;

export const Contact = styled.div``;

export const Form = styled.form``;

export const Rodape = styled.footer``;
