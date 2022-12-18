import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Roboto';
}
  
html {
  scroll-behavior: smooth;
  background: var(--background-color);
  color: var(--font-color);
}
  
  
:root {
  --font-color: #ffff;
  --background-color: #212121;
  --base-color: #7f26e4;
  --purp: #853adb;
  --header-height: 2rem;
}
`;
