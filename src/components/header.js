import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./header.css";

const Header = ({ acao }) => {
  return (
    <header className={acao ? "activeCor" : ""}>
      <div className="container">
        <AnchorLink href="#Home" className="logo">
          portifólio
        </AnchorLink>
        <nav>
          <AnchorLink className="links" href="#AboutMe">
            Sobre mim
          </AnchorLink>
          <AnchorLink className="links" href="#Skills">
            Skills
          </AnchorLink>
          <AnchorLink className="links" href="#Projects">
            Projetos
          </AnchorLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
