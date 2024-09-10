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
  align-items: center;
  justify-content: center;

  border-radius: 40px;
  background-color: #6bb84a;
  background: #fff;
  padding: 0 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  .content {
    display: flex;
    height: 70px;
    align-items: center;
    list-style: none;
    position: relative;

    .icone {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100px;
      text-decoration: none;
      color: inherit;
      transition: all 0.5s cubic-bezier(0.68, -0, 55, 0.265, 1.55);
    }

    .icone.active {
      transform: translateY(-10px);
    }

    .awesome {
      font-size: 25px;
      color: #bfbebe;
      transition: all 0.5s cubic-bezier(0.68, -0, 55, 0.265, 1.55);
    }

    .icone.active .awesome {
      color: #6bb84a;
    }

    .text {
      position: absolute;
      font-size: 12px;
      font-weight: 400;
      color: #6bb84a;
      opacity: 0;
      transform: translateY(32px);
      transition: all 0.5s cubic-bezier(0.68, -0, 55, 0.265, 1.55);
    }

    .icone.active .text {
      opacity: 1;
    }

    .indicador {
      position: absolute;
      top: -1px;
      left: 50px;
      height: 22px;
      width: 22px;
      background-color: #fff;
      border: 5px solid #6bb84a;
      border-radius: 50%;
      transform: translateX(-50%);
      transition: all 0.5s cubic-bezier(0.68, -0, 55, 0.265, 1.55);
    }

    .indicador::before,
    .indicador::after {
      content: " ";
      position: absolute;
      bottom: -8px;
      height: 24px;
      width: 19px;
    }

    .indicador::before {
      left: -22px;
      background-color: #fff;
      border-top-right-radius: 25px;
      box-shadow: 1px -13px #6bb84a;
    }

    .indicador::after {
      right: -22px;
      background-color: #fff;
      border-top-left-radius: 25px;
      box-shadow: -1px -13px #6bb84a;
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
