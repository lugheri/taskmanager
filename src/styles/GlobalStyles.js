import { createGlobalStyle, keyframes  } from "styled-components";
import { colors } from './colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {    
   
    font-family: Nunito, sans-serif;
    background: ${colors.bg};
    color: ${colors.secondary};
  }
  html, body, #root {
    height: 100%;
  }
`