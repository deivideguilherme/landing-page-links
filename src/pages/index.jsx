//Importação dos Hooks
import { useState } from "react";

//Importação componentes
import { MenuData } from "../components/MenuData-Navbar";

import {
  ContainerHeader,
  Home,
  ContainerMain,
  MenuIcons,
  Overlay,
} from "./styles";

//Importação imagens
import logoLinks from "../assets/images/logo-links.png";
import logoLinuxPro from "../assets/images/logo-linux-professional-institute.png";
import videoBackground from "../assets/movie/maos-digitando.mp4";

function Index() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <ContainerMain>
      <Overlay />
      <video className="videoBackground" autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </video>

      <ContainerHeader>
        <a href="/">
          <img
            src={logoLinks}
            alt="logo-links-informática"
            className="logo-links"
          />
        </a>

        <nav className="nav-menu">
          <MenuIcons onClick={handleClick}>
            <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </MenuIcons>
          <ul>
            {MenuData.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url} className={item.cName}>
                    <i className={item.icon}></i>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </ContainerHeader>

      <Home>
        <p>Computação em Nuvem Amazon AWS</p>
        <p>Consultoria especializada em Redes e Servidores</p>
        <p>Soluções Open Source e Software Livre</p>

        <div className="logo-linux-pro">
          <img src={logoLinuxPro} alt="logo-linux-professional-institute" />
        </div>
      </Home>
    </ContainerMain>
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
