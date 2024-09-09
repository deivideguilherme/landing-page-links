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
  background-color: rgba(234, 234, 234, 0.6);
  border-radius: 5px;
  width: 700px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  a {
    text-decoration: none;
    color: inherit;
    position: relative;
    text-transform: uppercase;
  }

  a::after {
    content: " ";
    width: 0%;
    height: 2px;
    background-color: #ff0101;
    position: absolute;
    bottom: -13px;
    left: 0;
    transition: 0.5s ease-in-out;
  }

  a:hover::after {
    width: 100%;
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
