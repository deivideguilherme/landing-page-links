//Importação dos Hooks
import { useState, useRef, useEffect } from "react";
import TypeIt from "typeit-react";

//Importando bibliotecas
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Importação componentes
import { MenuData } from "../components/Navbar/MenuData-Navbar";
import { CarouselData } from "../components/Carousel/CarouselData";
import { ProvidedServicesData } from "../components/ProvidedServices/ProvidedServicesData";
import { ServicesData } from "../components/Cards/ServicesData";
import ServiceCards from "../components/Cards";

import {
  Home,
  ContainerMain,
  Overlay,
  ContainerWhats,
  ProvidedServices,
  Nav,
  Services,
} from "./styles";

//Importação imagens
import logoLinks from "../assets/images/logo-links-branco.png";
import logoLinuxPro from "../assets/images/logo-linux-professional-institute.png";
import videoBackground from "../assets/movie/maos-digitando.mp4";
import logoWindows from "../assets/images/logo-windows.png";
import logoLinux from "../assets/images/logo-linux.png";

function Index() {
  //Hook alterar cor/opacidade do menu
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Hook abrir/fechar menu quando em responsividade
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  //Carrossel ------->
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  const handleMouseEnterNext = () => {
    sliderRef.current.slickNext();
  };

  const handleMouseEnterPrev = () => {
    sliderRef.current.slickPrev();
  };
  //Carrossel <-------

  return (
    <ContainerMain>
      <Overlay />
      <video className="videoBackground" autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
      </video>

      {/* <nav className="navbar-items"> */}
      <Nav scrolled={scrolled} className="navbar-items">
        <a href="/">
          <img
            src={logoLinks}
            alt="logo-links-informática"
            className="logo-links"
          />
        </a>

        {/* Icone de abrir e fechar o menu quando em resposividade */}
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </Nav>

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
          <div className="container-text-services">
            <ul>
              {ProvidedServicesData.map((item, index) => {
                return (
                  <li key={index}>
                    <i className={item.icon}></i> {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <label> Algumas das tecnologias que utilizamos: </label>

        {/* Carrossel de imagens das tecnologias */}
        <div className="carousel-container">
          <Slider ref={sliderRef} {...settings}>
            {CarouselData.map((item, index) => {
              return (
                <div key={index} className="image-container">
                  <img
                    src={item.img}
                    alt={`Imagem ${index}`}
                    className="carousel-logos"
                  />
                </div>
              );
            })}
          </Slider>

          {/* Ícone de seta esquerda */}
          <div
            className="arrow prev"
            onMouseEnter={handleMouseEnterPrev}
            onClick={handleMouseEnterPrev}
          >
            &#8249;
          </div>

          {/* Ícone de seta direita */}
          <div
            className="arrow next"
            onMouseEnter={handleMouseEnterNext}
            onClick={handleMouseEnterNext}
          >
            &#8250;
          </div>
        </div>
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

      {/* Serviços oferecidos pela empresa */}
      <Services>
        {ServicesData.map((service, index) => (
          <ServiceCards
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </Services>
    </ContainerMain>
  );

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
