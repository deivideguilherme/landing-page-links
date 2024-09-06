import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

export const ContainerLogo = styled.div`
  img {
    width: 250px;
  }
`;

export const ContainerMenu = styled.nav`
  display: flex;
  justify-content: center;
  gap: 50px;

  a {
    text-decoration: none;
    color: inherit;
    position: relative;
  }

  a::after {
    content: " ";
    width: 0%;
    height: 2px;
    background-color: #ff0404;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.5s ease-in-out;
  }

  a:hover::after {
    width: 100%;
  }
`;

export const Home = styled.section``;

export const Services = styled.section``;

export const Company = styled.section``;

export const Title = styled.h2``;

export const Contact = styled.div``;

export const Form = styled.form``;

export const Rodape = styled.footer``;
