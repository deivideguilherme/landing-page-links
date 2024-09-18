//Importação dos Hooks
import { useState } from "react";
import TypeIt from "typeit-react";

//Importando biblioteca Carrossel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Importação componentes
import { MenuData } from "../components/MenuData-Navbar";
import { CarouselData } from "../components/CarouselData";

import {
  Home,
  ContainerMain,
  Overlay,
  ContainerWhats,
  ProvidedServices,
  Carousel,
} from "./styles";

//Importação imagens
import logoLinks from "../assets/images/logo-links-branco.png";
import logoLinuxPro from "../assets/images/logo-linux-professional-institute.png";
import videoBackground from "../assets/movie/maos-digitando.mp4";
import logoWindows from "../assets/images/logo-windows.png";
import logoLinux from "../assets/images/logo-linux.png";

function Index() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  //Carrossel
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoPlay: true,
  };

  return (
    <ContainerMain>
      <Overlay />
      <video className="videoBackground" autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </video>

      <nav className="navbar-items">
        <a href="/">
          <img
            src={logoLinks}
            alt="logo-links-informática"
            className="logo-links"
          />
        </a>

        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
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

      <Home>
        {/* Texto Fixo */}
        <div className="fixed-text">Aqui você encontra</div>

        {/* Texto Animado */}
        <div className="animated-text">
          <div>
            <TypeIt
              options={{ loop: true }}
              getBeforeInit={(instance) => {
                instance
                  .type('<span class="animated-span">Excelência</span>', {
                    delay: 1000,
                  })
                  .pause(750)
                  .delete(10)
                  .pause(200)
                  .type('<span class="animated-span">Eficiência</span>', {
                    delay: 1000,
                  })
                  .pause(750)
                  .delete(10)
                  .pause(200)
                  .type('<span class="animated-span">Confiabilidade</span>', {
                    delay: 1000,
                  })
                  .pause(750)
                  .delete(14)
                  .pause(200)
                  .type('<span class="animated-span">Profissionalismo</span>', {
                    delay: 1000,
                  })
                  .pause(750)
                  .delete(16)
                  .pause(200)
                  .type('<span class="animated-span">Dedicação</span>', {
                    delay: 1000,
                  });

                // Remember to return it!
                return instance;
              }}
            />
          </div>
        </div>

        {/* Texto de Apresentação */}
        <div className="apresentation-text">
          <p>
            &#34;Tecnologia confiável, soluções sob medida: cuidamos da sua
            <br />
            infraestrutura para que você foque no que realmente importa.&#34;
          </p>
        </div>

        <div className="some-services">
          <p>
            Computação em Nuvem Amazon AWS &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            Consultoria especializada em Redes e Servidores
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Soluções Open Source e
            Software Livre{" "}
          </p>
        </div>

        <div className="logo-linux-pro">
          <img src={logoLinuxPro} alt="logo-linux-professional-institute" />
        </div>
      </Home>

      {/* Resumos dos serviços prestados */}
      <ProvidedServices>
        <div className="logos-systems">
          <img src={logoLinux} alt="logo-linux" className="logos logo-linux" />
          <img
            src={logoWindows}
            alt="logo-windows"
            className="logos logo-windows"
          />
        </div>
        <div className="text-services">
          <h3>
            Maximize o potencial de sua empresa criando diferenciais <br />
            competitivos e minimizando custos com nossas soluções em:
          </h3>
          <p>
            <ul>
              <li>
                <i className="fa-solid fa-server" />
                Servidores
              </li>
              <li>
                <i className="fa-solid fa-shield-halved" />
                Segurança
              </li>
              <li>
                <i className="fa-solid fa-network-wired" />
                Redes heterogêneas (Linux e Windows)
              </li>
              <li>
                <i className="fa-brands fa-aws" />
                Computação em nuvem Amazon AWS
              </li>
              <li>
                <i className="fa-solid fa-gears" />
                Automatização das rotinas de Backup (Local e em Nuvem)
              </li>
              <li>
                <i className="fa-solid fa-video" />
                Monitoramento total dos recursos computacionais em sua rede
              </li>
              <li>
                <i className="fa-solid fa-globe" />
                Interligação segura de escritórios (Matriz e Filiais) através da
                VPN
              </li>
              <li>
                <i className="fa-solid fa-computer" />
                Virtualização: Compartilhe recursos, tendo vários Servidores e
                Estações de Trabalho virtuais em um único servidor
              </li>
            </ul>
          </p>
        </div>

        {/* Carrossel de tecnologias */}
        <Carousel>
          <div className="w-3/4 m-auto">
            <div className="mt-20">
              <Slider {...settings}>
                {CarouselData.map((item, index) => {
                  return (
                    <div key={index} className="container-logos">
                      <div>
                        <img src={item.img} className="carousel-logos" />
                      </div>

                      {/* <div className="flex flex-col justify-center items-center gap-4 p-4">
                        <button>Mais</button>
                      </div> */}
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </Carousel>
      </ProvidedServices>

      {/* Botão Whatsapp */}
      <ContainerWhats>
        <a
          href="https://api.whatsapp.com/send?phone=5516996310657&text=Gostaria%20de%20ajuda%20técnica?%20Vamos%20Convesar!"
          className="icon-whats"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </ContainerWhats>
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

  //    {/* Parceiros */}
  //     <Contact>
  //       <Form></Form>
  //     </Contact>

  //     {/* Fale Conosco */}
  //     <Contact>
  //       <Form></Form>
  //     </Contact>

  //     <Rodape>
  //       <p>© 2024 Deivide Guilherme</p>
  //     </Rodape>
  //   </div>
}

export default Index;
