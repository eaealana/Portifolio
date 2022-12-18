import styled from "styled-components";

//! ROOTS
// --font-color: #ffff;
// --background-color: #212121;
// --base-color: #7f26e4;
// --purp: #853adb;
// --header-height: 4.5rem;

//! TITLE - LEGEND - DIVIDER
export const Legend = styled.legend`
  font: 500 0.9rem "DM Sans", sans-serif;
  letter-spacing: 1px;
  color: #d4d3d3;
  padding-top: 0.4rem;
`;

export const Title = styled.h1`
  margin-bottom: 1rem;

  font: 500 2rem "Poppins", sans-serif;
  color: var(--font-color);
  letter-spacing: 1px;

  span {
    color: var(--base-color);
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    hsla(268, 78%, 52%, 1) 0%,
    hsla(0, 0%, 13%, 1) 100%
  );
`;

export const DividerTwo = styled.div`
  height: 1px;
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 13%, 1) 0%,
    hsla(268, 78%, 52%, 1) 100%
  );
`;

//! MAIN
export const Main = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--background-color);
`;

//! HOME
export const Home = styled.div`
  margin: 6rem 0 3rem 1rem;
`;

export const NameHome = styled.h1`
  font: 500 1.5rem "Poppins", sans-serif;
  color: var(--font-color);
  letter-spacing: 1px;
  margin-bottom: 1rem;

  padding: 0.5rem;
  border-radius: 3px;

  animation: mymove 5s infinite;

  @keyframes mymove {
    0% {
      background: var(--base-color);
      width: 14rem;
      color: #fff;
    }

    25% {
      background: var(--purp);
      width: 21rem;
      color: #fff;
    }

    50% {
      background: #8b47da;
      width: 23rem;
      color: rgb(37, 37, 37);
    }

    75% {
      background: #a560f3;
      width: 23rem;
      color: rgb(22, 22, 22);
    }

    100% {
      background: #b382ec;
      width: 14rem;
      color: #000;
    }
  }

  @media (min-width: 1000px) {
    font-size: 2rem;

    @keyframes mymove {
      0% {
        background: var(--base-color);
        width: 18rem;
        color: #fff;
      }

      25% {
        background: var(--purp);
        width: 30rem;
        color: #fff;
      }

      50% {
        background: #8b47da;
        width: 32rem;
        color: rgb(37, 37, 37);
      }

      75% {
        background: #a560f3;
        width: 32rem;
        color: rgb(22, 22, 22);
      }

      100% {
        background: #b382ec;
        width: 18rem;
        color: #000;
      }
    }
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  margin-top: 2.7rem;
`;

export const DownloadCv = styled.button`
  padding: 0.7rem 1rem;
  width: 10.4rem;
  margin-right: 0.5rem;
  display: inline-block;
  text-align: center;

  border-radius: 7px;
  outline: none;
  cursor: pointer;

  background: transparent;
  border: 1px solid #7f26e4;

  transition: background 0.8s;

  a {
    font: 500 0.8rem "Poppins", sans-serif;
    color: #fff;
    letter-spacing: 1px;
  }

  &:hover {
    background: #7f26e4;
  }

  @media (min-width: 1000px) {
    width: 13rem;
  }
`;

export const PleaseContact = styled.a`
  padding: 0.7rem 1.7rem;
  display: inline-block;
  text-align: center;

  font: 500 0.8rem "Poppins", sans-serif;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 7px;
  border: 1px solid #333333;
  outline: none;
  background: #333333;
  cursor: pointer;

  transition: background 0.8s;

  &:hover {
    background: transparent;
  }

  @media (min-width: 1000px) {
    width: 13rem;
  }
`;

//! ABOUT ME
export const AboutMe = styled.div`
  @media (min-width: 1000px) {
    margin-left: 1rem;
  }
`;

export const Text = styled.div`
  margin-right: 1rem;

  p {
    font: 400 0.8rem "Roboto", sans-serif;
    letter-spacing: 1px;
    line-height: 1.4rem;
  }
`;

//! CONTACTS
export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 0 1rem;
`;

export const Table = styled.table`
  text-align: center;

  tr td {
    padding: 1.5rem;
  }
`;

export const DivContacts = styled.div`
  h1 {
    margin: 0.2rem 0;

    font: 500 0.9rem "Roboto", sans-serif;
    letter-spacing: 2px;
  }

  p {
    font: 500 0.8rem "Roboto", sans-serif;
    color: #9c9999;
  }

  @media (min-width: 1000px) {
    h1 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const Icon = styled.a`
  display: inline-block;
  padding: 1rem 1.5rem;
  margin-bottom: 0.5rem;

  font-size: 1.6rem;
  font-weight: lighter;
  border: 1px solid #000;
  border-radius: 100px;
  color: #000;
  cursor: pointer;

  animation: myIcons 4s infinite;

  @keyframes myIcons {
    0% {
      color: #7f26e4;
      border-color: #7f26e4;
    }

    25% {
      color: #7f26e4;
      border-color: #7f26e4;
      transform: translateY(-17px);
    }
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

//! SKILLS
export const Skills = styled.div``;

export const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const Img = styled.img`
  margin: 0 0.3rem;
  width: 4rem;
  height: 4rem; 

  @media (min-width: 1000px) {
    width: 6rem;
    height: 5rem;
  }
`;

//! PROJECTS
export const Projects = styled.div``;
export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
export const Card = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1.3rem 0.5rem;
  width: 18rem;
  height: 11.8rem;

  background: #383535;
  box-shadow: 0px 0px 12px rgba(226, 222, 222, 0.08);
  border-bottom: 0.25rem solid #fff;
  border-radius: 0.25rem 0.25rem 0 0;

  transition: 0.7s;
  cursor: pointer;

  video {
    width: 18rem;
    align-self: top;
  }
`;
export const LinkCard = styled.a``;

export const FigureCard = styled.figure`
  align-items: center;
  justify-content: center;

  font: 500 0.7rem "Roboto";
  letter-spacing: 1px;

  padding: 0.9rem 0.1rem 0.3rem 0.1rem;
`;
