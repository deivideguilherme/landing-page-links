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
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #808080;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  width: 95%;
  border-radius: 15px;
  margin-top: 20px;

  .logo-links {
    width: 200px;
    cursor: pointer;
  }

  .nav-menu {
  }
`;

export const MenuIcons = styled.div`
  .fa-bars {
    color: #000;
  }
  display: none;
`;

export const ContainerMenu = styled.nav`
  display: flex;
  font-size: 1.25rem; // 1rem = 16px -> 1.25 * 16 = 20px

  ul {
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 5px;
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
        padding-right: 10px;
      }
    }

    .nav-links:hover {
      background: rgb(80, 80, 238);
      border-radius: 8px;
      transition: all 0.2s ease-in-out;
    }
  }

  /* @media screen and (max-width: 850px) {
    .nav-links {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      background-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(4px);
      border-radius: 13px;
      width: 100%;
      height: auto;
      position: absolute;
      top: 0;
      left: 0;
      align-items: stretch;
      padding: 80px 0 30px 0;
      margin: 0;
    } */
`;

export const Home = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 40px;

  p {
    font-size: 25px;
    color: #fff;
  }

  .logo-linux-pro {
    width: 47%;
    margin-top: 40px;

    display: flex;
    justify-content: end;
    img {
      width: 130px;
    }
  }
`;

export const Services = styled.section``;

export const Company = styled.section``;

export const Title = styled.h2``;

export const Contact = styled.div``;

export const Form = styled.form``;

export const Rodape = styled.footer``;
