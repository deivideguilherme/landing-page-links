import styled from "styled-components";

export const ContainerMain = styled.div`
  /* border: 1px solid blue; */

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerHeader = styled.div`
  /* border: 1px solid #000; */

  display: flex;
  justify-content: space-between;

  background-color: #808080;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  width: 95%;
  border-radius: 15px;
  margin-top: 20px;
`;

export const ContainerLogo = styled.div`
  /* border: 1px solid red; */

  img {
    width: 250px;
  }
`;

export const MenuIcons = styled.div`
  .fa-bars {
    color: #fff;
  }
`;

export const ContainerMenu = styled.nav`
  /* border: 1px solid red; */

  display: flex;
  font-size: 1.25rem; // 1rem = 16px -> 1.25 * 16 = 20px

  ul {
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 10px;
    align-items: center;
    text-align: center;
    justify-content: end;
    list-style: none;

    .nav-links {
      text-decoration: none;
      color: #fff;
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
  }
`;

export const LinuxPro = styled.div`
  width: 47%;
  margin-top: 40px;

  display: flex;
  justify-content: end;
  img {
    width: 130px;
  }
`;

export const Services = styled.section``;

export const Company = styled.section``;

export const Title = styled.h2``;

export const Contact = styled.div``;

export const Form = styled.form``;

export const Rodape = styled.footer``;
