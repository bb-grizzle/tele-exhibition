import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  *{
    text-decoration:none;
    list-style: none;
  }

`;

export default GlobalStyle;
