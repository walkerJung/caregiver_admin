import { createGlobalStyle } from "styled-components";
import "../assets/fonts/font.css";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
      margin:0;
      padding:0;
      letter-spacing: -0.45px;
  }
  body {
    font-family: "Noto Sans Kr", sans-serif;
    line-height: 1.46;
  }
  button, input, optgroup, select, textarea {
    font-family: "Noto Sans Kr", sans-serif;
    }
  h1, h2, h3, h4, h5, h6, p, pre {
    margin: 0;
    padding: 0;
    
  }
  .table-responsive {
    overflow: inherit;
    overflow-x: auto;
  }
  .table-hover tbody tr td, .table-hover tbody tr th{
      cursor: pointer;
  }
  .sidebar .nav li > a, .off-canvas-sidebar .nav li > a {
      font-size:14px;
  }
`;

export default GlobalStyle;
