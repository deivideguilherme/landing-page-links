import { ContainerMenu, ContainerLogo, ContainerHeader } from "./styles";

import imgLogo from "../assets/logo-links.png";

function Index() {
  return (
    <ContainerHeader>
      <ContainerLogo>
        <img src={imgLogo} alt="logo-links-informática" />
      </ContainerLogo>

      <ContainerMenu>
        <a href="/">Home</a>
        <a href="/">Quem somos?</a>
        <a href="/">O que fazemos?</a>
        <a href="/">Depoimentos</a>
        <a href="/">Contato</a>
      </ContainerMenu>
    </ContainerHeader>
  );

  //     <Home>
  //       <Title />
  //     </Home>

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
