import React, { useEffect, useState } from "react";
import Header from "./components/header";
import "./components/header.css";

//! images and video
import Html from "./assets/html.png";
import Css from "./assets/css.png";
import Javascript from "./assets/javascript.png";
import ReactImg from "./assets/react.png";
import Node from "./assets/nodeHover.png";
import ConvertMoney from "./assets/projects/convert-money.mp4";
import CampIn from "./assets/projects/camp-in.mp4";
import DevClub from "./assets/projects/dev-club.mp4";
import Rocket from "./assets/projects/rocket.mp4";
import Beauty from "./assets/projects/beauty-salon.mp4";
import Curriculo from "./assets/Alana - Currículo.pdf";

import {
  Main,
  Home,
  NameHome,
  Legend,
  HomeContainer,
  DownloadCv,
  PleaseContact,
  Divider,
  DividerTwo,
  AboutMe,
  Text,
  Title,
  Contacts,
  Table,
  DivContacts,
  Icon,
  Skills,
  Images,
  Img,
  Projects,
  Cards,
  Card,
  LinkCard,
  FigureCard,
} from "./style";
const App = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(function () {
    function positionScroll() {
      if (window.scrollY >= 70) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", positionScroll);
  }, []);
  return (
    <Main>
      {/* //! header */}
      <Header acao={scroll} />

      {/* //! home */}
      <Home>
        <div id="Home" className="section">
          <div>
            <NameHome>Alana Ribeiro</NameHome>
            <Legend>Desenvolvedora Front-end | JavaScript - React </Legend>
          </div>

          <nav>
            <HomeContainer>
              <DownloadCv>
                <a
                  href={Curriculo}
                  title="Baixar currículo - Alana"
                  download="Alana Ribeiro - Currículo.pdf"
                >
                  Download
                </a>
              </DownloadCv>
              <PleaseContact
                href="https://api.whatsapp.com/send?phone=5512981182732&text=Entre%20em%20contato%20comigo"
                target="_blank"
              >
                Entre em contato
              </PleaseContact>
            </HomeContainer>
          </nav>
        </div>
      </Home>
      <Divider></Divider>

      {/* //! ABOUT ME */}
      <AboutMe>
        <div id="AboutMe" className="section">
          <Text>
            <Title>
              Sobre <span>mim</span>
            </Title>
            <p>
              Me chamo Alana, moro atualmente em São José dos Campos trabalhando
              na parte administrativa de uma Imobiliária.
            </p>
            <p>
              Estou cursando o Dev Club para Fullstack mas com foco em
              front-end. Sempre praticando com projetos pessoais e em constante
              aprendizado.
            </p>
          </Text>

          {/* //! CONTACTS */}
          <Contacts>
            <Table>
              <tr>
                <td>
                  <DivContacts>
                    <Icon
                      href="mailto: ribeiroalana2005@gmail.com"
                      target="_blank"
                    >
                      <i class="fi fi-rr-envelope"></i>{" "}
                    </Icon>
                    <h1>E-mail</h1>
                    <p>ribeiroalana2005@gmail.com</p>
                  </DivContacts>
                </td>
              </tr>
              <tr>
                <td>
                  <DivContacts>
                    <Icon
                      href="https://www.instagram.com/iaae_alana/"
                      target="_blank"
                    >
                      <i class="fi fi-brands-instagram"></i>{" "}
                    </Icon>
                    <h1>Instagram</h1>
                    <p>@iaae_alana</p>
                  </DivContacts>
                </td>
              </tr>
            </Table>
            <Table>
              <tr>
                <td>
                  <DivContacts>
                    <Icon
                      href="https://api.whatsapp.com/send?phone=5512981182732&text=Entre%20em%20contato%20comigo"
                      target="_blank"
                    >
                      <i class="fi fi-brands-whatsapp"></i>{" "}
                    </Icon>
                    <h1>Whatsapp</h1>
                    <p>(12) 98118-2732</p>
                  </DivContacts>
                </td>
              </tr>
              <tr>
                <td>
                  <DivContacts>
                    <Icon
                      href="https://www.linkedin.com/in/eae-alana/"
                      target="_blank"
                    >
                      <i class="fi fi-brands-linkedin"></i>{" "}
                    </Icon>
                    <h1>Linkedin</h1>
                    <p>Eae_alana</p>
                  </DivContacts>
                </td>
              </tr>
            </Table>
          </Contacts>
        </div>
      </AboutMe>

      <DividerTwo></DividerTwo>
      {/* //! SKILLS */}
      <Skills>
        <div id="Skills" className="section">
          <Title>Skills</Title>

          <Images>
            <Img src={Html} alt="HTML5" />
            <Img src={Css} alt="CSS3" />
            <Img src={Javascript} alt="Javscript" />
            <Img src={Node} alt="Node.js" />
            <Img src={ReactImg} alt="React.js" />
          </Images>
        </div>
      </Skills>

      <Divider></Divider>

      {/* //! PROJECTS */}
      <Projects>
        <div id="Projects" className="section">
          <Title>Projetos</Title>
          <Cards>
            <Card>
              <LinkCard
                href="https://eaealana.github.io/Convert-Money/"
                target="_blank"
              >
                <video src={ConvertMoney} autoPlay loop muted />
              </LinkCard>
              <FigureCard>
                {" "}
                Conversor de Moeda com HTML, CSS e JavaScript. Para converter o
                Real pro USA, Euro e Bitcoin.{" "}
              </FigureCard>
            </Card>

            <Card>
              <LinkCard href="https://camp-in-six.vercel.app/" target="_blank">
                <video src={CampIn} autoPlay loop muted />
              </LinkCard>
              <FigureCard>Interface de login criada com React.</FigureCard>
            </Card>

            <Card>
              <LinkCard
                href="#"
                target="_blank"
              >
                <video src={DevClub} autoPlay loop muted />
              </LinkCard>
              <FigureCard>
                Interface de Hamburgueria criada <br></br>com React e Node.
              </FigureCard>
            </Card>
          </Cards>
          <Cards>
            <Card>
              <LinkCard
                href="https://eaealana.github.io/BeautySalon/"
                target="_blank"
              >
                <video src={Beauty} autoPlay loop muted />
              </LinkCard>
              <FigureCard>
                Projeto com HTML, CSS e JavaScript. <br></br>Para um salão de
                beleza.
              </FigureCard>
            </Card>

            <Card>
              <LinkCard
                href="https://eaealana.github.io/Rocket-NFTs/"
                target="_blank"
              >
                <video src={Rocket} autoPlay loop muted />
              </LinkCard>
              <FigureCard>Projeto com HTML, CSS e JavaScript</FigureCard>
            </Card>
          </Cards>
        </div>
      </Projects>
    </Main>
  );
};
export default App;
