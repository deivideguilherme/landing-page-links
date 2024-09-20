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
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 100px;
  position: fixed;

  top: 0;
  left: 50%;
  transform: translate(-50%);

  font-size: 1rem; // 1rem = 16px
  padding: 0 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  background: ${(props) => (props.scrolled ? "#000" : "transparent")};
  transition: background 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 1000;

  .logo-links {
    margin: 20px 0 0 50px;
    width: 200px;
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
    }

    .nav-links:hover {
      background: rgba(255, 255, 255, 0.2);
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
  height: 40%;
  width: 65%;
  margin-top: 10%;
  z-index: -1;
  padding: 60px 25px 0 25px;

  .fixed-text {
    /* border: 1px solid #fff; */
    display: inline-block;
    font-size: 3rem;
    color: var(--septenary-color);
  }

  .animated-text {
    /* border: 1px solid #fff; */
    display: inline-block;
    font-size: 3rem;
    color: var(--septenary-color);
    margin-left: 10px;
  }

  .apresentation-text {
    margin-top: 10px;
    width: 60%;
    font-size: 1.25rem;
    color: var(--septenary-color);
  }

  .animated-span {
    color: var(--primary-color);
    font-weight: 600;
  }

  .some-services {
    width: 100%;
    margin-top: 10%;
    padding: 10px;
    color: var(--secondary-color);
    text-align: center;
    font-size: 1rem;
  }

  .logo-linux-pro {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;

    img {
      width: 150px;
    }
  }
`;

export const ProvidedServices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
  background-color: var(--secondary-color);
  width: 100%;
  height: 100%;

  .logos-systems {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    width: 65%;

    .logos {
      width: 200px;
    }
  }

  .text-services {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      text-align: center;
      margin: 10px 0 15px 0;
      font-weight: 400;
      font-size: 1.5rem;
    }

    .container-text-services {
      margin-top: 30px;
      font-size: 1.2rem;
      text-align: center;
      font-weight: 200;
      line-height: 2em; //1em = 12px

      ul {
        list-style: none;

        li {
          margin-bottom: 15px;
          i {
            margin-right: 10px;
          }
        }
      }
    }
  }

  label {
    margin: 50px 0 30px;
    color: var(--tertiary-color);
    font-weight: bold;
  }

  //Carrosel
  .carousel-container {
    position: relative;
    width: 40%;
    margin: auto;
    align-items: center;

    .image-container {
      width: 20px;
      height: 80px;
      overflow: hidden;
      position: relative;
    }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
    cursor: pointer;
    z-index: 1;
    color: #333;
    opacity: 0.6;
  }

  .prev {
    left: -50px;
  }

  .next {
    right: -50px;
  }

  .slick-slide {
    /* margin: 0 10px; */
  }

  .slick-track {
    display: flex;
    gap: 90px;
    margin-bottom: 50px;
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
    /* opacity: 0.7; */
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

export const Services = styled.div`
  margin: 50px 0 50px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 80%;
`;

export const Company = styled.section``;

export const Title = styled.h2``;

export const Contact = styled.div``;

export const Form = styled.form``;

export const Rodape = styled.footer``;
