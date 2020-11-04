import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  *{
    text-decoration:none;
    list-style: none;
    box-sizing: border-box;
  }
  body{
    font-family: roboto,sans-serif;
    font-weight: 400;
    font-style: normal;
  }

`;

export default GlobalStyle;
