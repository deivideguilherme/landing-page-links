import { useRef } from "react";

//Importação componentes
import {
  ContainerMenu,
  ContainerLogo,
  ContainerHeader,
  Home,
  LinuxPro,
} from "./styles";

//Importação icones menu
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons/faAddressCard";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons/faMapLocationDot";

//Importação imagens
import logoLinks from "../assets/logo-links.png";
import logoLinuxPro from "../assets/logo-linux-professional-institute.png";
// import cloudComputing from "../assets/computacao-em-nuvem.jpg";

function Index() {
  const menu = useRef();

  function navBar() {
    menu.forEach(menu, (index) => {
      menu.addEventListener("click");
    });
  }

  return (
    <div
      style={{
        backgroundColor: "#6BB84A",
        // backgroundImage: `url(${cloudComputing})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}
    >
      <ContainerHeader>
        <ContainerLogo>
          <img src={logoLinks} alt="logo-links-informática" />
        </ContainerLogo>

        <ContainerMenu>
          <ul className="content">
            <li className="list">
              <a href="#" className="icone active" ref={menu} onClick={navBar}>
                <FontAwesomeIcon icon={faHouse} className="awesome" />
                <span className="text">Home</span>
              </a>
            </li>

            <li className="list">
              <a href="#" className="icone">
                <FontAwesomeIcon icon={faPeopleGroup} className="awesome" />
                <span className="text">Quem Somos?</span>
              </a>
            </li>

            <li className="list">
              <a href="#" className="icone">
                <FontAwesomeIcon icon={faSquareCheck} className="awesome" />
                <span className="text">O que fazemos?</span>
              </a>
            </li>

            <li className="list">
              <a href="#" className="icone">
                <FontAwesomeIcon icon={faCommentDots} className="awesome" />
                <span className="text">Depoimentos</span>
              </a>
            </li>

            <li className="list">
              <a href="#" className="icone">
                <FontAwesomeIcon icon={faAddressCard} className="awesome" />
                <span className="text">Contato</span>
              </a>
            </li>

            <li className="list">
              <a href="#" className="icone">
                <FontAwesomeIcon icon={faMapLocationDot} className="awesome" />
                <span className="text">Onde estamos?</span>
              </a>
            </li>
            <span className="indicador"></span>
          </ul>
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
