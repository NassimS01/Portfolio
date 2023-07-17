import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --header-height: 3rem;
  /*========== Colors ==========*/
  /*Color mode HSL(hue, saturation, lightness)*/
  --title-color: #333333;
  --title-color-dark: #000;
  --text-color: #757575;
  --link-color-hover: #147efb;
  --body-color: #fafafa;
  --container-color: #fff;
  --container-color: #fff;

  /*========== Font and typography ==========*/
  --body-font: "Poppins", sans-serif;

  /*.5rem = 8px | 1rem = 16px ...*/
  --big-font-size: 3.5rem;
  --h1-font-size: 2.25rem;
  --h2-font-size: 1.5rem;
  --h3-font-size: 1.25rem;
  --normal-font-size: 1rem;
  --small-font-size: 0.875rem;
  --smaller-font-size: 0.813rem;
  --tiny-font-size: 0.625rem;

  /*========== Font weight ==========*/
  --font-normal: 400;
  --font-medium: 500;
  --font-semi-bold: 600;

  /*========== Margins Bottom ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --mb-0-25: 0.25rem;
  --mb-0-5: 0.5rem;
  --mb-0-75: 0.75rem;
  --mb-1: 1rem;
  --mb-1-5: 1.5rem;
  --mb-2: 2rem;
  --mb-2-5: 2.5rem;
  --mb-3: 3rem;

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

  html {
     scroll-behavior: smooth;
  }

  h1,
  h2, 
  h3 {
     color: var(--title-color);
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
     color: var(--title-color);
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
     max-width: 1024px;
     margin-left: auto;
     margin-right: auto;
  }

  .grid {
     display: grid;
     gap: 1.5rem;
  }

    /*================ BUTTONS ================ */

  .button {
    display: inline-block;
    background-color: var(--title-color);
    color: (--container-color);
    padding: 1.25rem 2rem;
    border-radius: 1rem;
    font-weight: var(--font-medium);
  }

  .button:hover {
     background-color: var(--title-color-dark);
  }

  .buttonIcon {
     margin-left: var(--mb-0-5);
  }

  .buttonFlex {
     display: inline-flex;
     align-items: center;
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
