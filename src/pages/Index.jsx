import {
  ContainerMenu,
  ContainerLogo,
  ContainerHeader,
  Home,
  LinuxPro,
} from "./styles";

import logoLinks from "../assets/logo-links.png";
import logoLinuxPro from "../assets/logo-linux-professional-institute.png";
import cloudComputing from "../assets/computacao-em-nuvem.jpg";

function Index() {
  return (
    <div
      style={{
        backgroundImage: `url(${cloudComputing})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ContainerHeader>
        <ContainerLogo>
          <img src={logoLinks} alt="logo-links-informática" />
        </ContainerLogo>

        <ContainerMenu>
          <a href="/">Home</a>
          <a href="/">Quem somos?</a>
          <a href="/">O que fazemos?</a>
          <a href="/">Depoimentos</a>
          <a href="/">Contato</a>
        </ContainerMenu>
      </ContainerHeader>
      <Home>
        <p>Computação em Nuvem Amazon AWS</p>
        <p>Consultoria especializada em Redes e Servidores</p>
        <p>Soluções Open Source e Software Livre</p>

        <LinuxPro>
          <img src={logoLinuxPro} alt="logo-linux-professional-institute" />
        </LinuxPro>
      </Home>
    </div>
  );

  //     {/* Nossas Soluções */}
  //     <Services>
  //       <Title />
  //     </Services>

  //     {/* Quem somos? */}
  //     <Company>
  //       <Title />
  //     </Company>

  //     {/* Fale Conosco */}
  //     <Contact>
  //       <Form></Form>
  //     </Contact>

  //     <Rodape>
  //       <p>Powered By Deivide Guilherme</p>
  //     </Rodape>
  //   </div>
}

export default Index;
