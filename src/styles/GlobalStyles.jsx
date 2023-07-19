import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

[data-theme="dark"] {
  --color-text: #ccc;
  --nabvar-color: #131415;
  --color-navbar: #131415;
  --background-body: #202020;
}

:root {
  --color-text: #333333;
  --color-navbar: #f1f1f1;
  --text-color: #757575;
  --link-color-hover: #147efb;
  --background-body: #f5f5f5;

  /*========== Font and typography ==========*/
  --body-font: "Poppins", sans-serif;

  /*========== Font weight ==========*/
  --font-normal: 400;
  --font-medium: 500;
  --font-semi-bold: 600;

  
  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;
}
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
     background-color: var(--color-navbar);
  }

  html {
     scroll-behavior: smooth;
  }

  .theme {
    position: absolute;
    width: 100vw;
    height: 100%;
    background-color: var(--background-body);
  }

  #root {
    height: 94vh;
   max-width: 1200px;
  }

  h1,
  h2, 
  h3 {
     color: var(--color-text);
     font-weight: var(--font-semi-bold);
  }

  ul {
     list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
     cursor: pointer;
     border: none;
     outline: none;
  }

  img {
     max-width: 100%;
     height: auto;
  }

  /*================ REUSABLE CSS CLASS ================ */

  .section {
     padding: 6rem 0 2rem;
  }

  .sectionTitle {
     font-size: var(--h1-font-size);
     color: var(--color-text);
  }

  .sectionSubtitle {
     display: block;
     font-size: var(--small-font-size);
  }

  .SectionTitle, .sectionSubtitle {
     text-align: center;
  }

  /*================ LAYOUT ================ */

  .container {
     max-width: 1000px;
    margin-left: auto;
     margin-right: auto;
  }

  .grid {
     display: grid;
     gap: 1.5rem;
  }

    /*================ BREACKPOINTS ================ */

  @media screen and (max-width: 992px) {

    .container {
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }

  .button {
    padding: 1rem 1.75rem;
  }

  .button__icon {
    width: 22px;
    height: 22px;
  }
  }

  @media screen and (max-width: 768px) {

  body {
    margin: 0 0 var(--header-height) 0;
  }

  .section {
    padding: 2rem 0 4rem;
  }

  .section__subtitle {
    margin-bottom: var(--mb-3);
  }

  @media screen and (max-width: 350px) {
  :root {
    --big-font-size: 2.25rem;
  }

  .container {
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
}
}

`;
