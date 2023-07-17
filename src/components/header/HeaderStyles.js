import { styled } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyles";

export const HeaderStyled = styled.header.attrs({ className: "header" })`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 0 0 1.5rem 1.5rem;

  & .nav {
    height: calc(var(--header-height) + 1.5rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
  }

  & .nav__logo,
  .nav__toggle {
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
    font-size: var(--h3-font-size);
  }

  & .nav__list {
    display: flex;
    column-gap: 2rem;
  }

  & .nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--title-color);
    font-weight: var(--font-medium);
    transition: 0.3s;
  }

  & .nav__close,
  .nav__toggle,
  .nav__icon {
    display: none;
  }

  & .selected__lang {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  & .selected__lang:before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    margin: 0px 5px 0px 10px;
    background-image: url("https://flagsapi.com/US/flat/24.png");
  }

  & .lang__menu ul {
    position: absolute;
    margin: 0;
    padding: 4px 10px;
    background-color: #fff;
    border: 1px solid #f8f8f8;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: none;
  }

  & .lang__menu ul:hover {
    background-color: #f2f2f2;
  }

  & .lang__menu:hover ul {
    display: block;
  }

  & .lang__menu ul li a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;
  }

  & .lang__menu ul li a:before {
    content: "";
    display: flex;
    margin-right: 5px;
    width: 24px;
    height: 24px;
    margin-right: 5px;
    background-image: url("https://flagsapi.com/ES/flat/24.png");
  }

  /* react state */

  & .selected__lang.sp:before {
    background-image: url("https://flagsapi.com/ES/flat/24.png");
  }

  /* ACTIVE LINK */

  & .active-link,
  .nav__link:hover {
    color: var(--link-color-hover);
  }

  @media screen and (max-width: 768px) {
    top: initial;
    bottom: 0;

    .nav {
      height: var(--header-height);
    }

    .nav__menu {
      position: fixed;
      bottom: -100%;
      left: 0;
      width: 100%;
      background-color: var(--body-color);
      padding: 2rem 1.5rem 4rem;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: 0.3s;
      z-index: var(--z-tooltip);
    }

    /* Show menu */

    .show__menu {
      bottom: 0;
    }

    .nav__list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .nav__icon {
      font-size: 1.2rem;
    }

    .nav__close {
      position: absolute;
      right: 1.3rem;
      bottom: 0.5rem;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--title-color);
    }

    .nav__close:hover {
      color: var(--link-color-hover);
    }

    .nav__toggle {
      cursor: pointer;
      transform: rotate(90deg);
    }

    .nav__close,
    .nav__toggle,
    .nav__icon {
      display: block;
    }
  }

  @media screen and (max-width: 350px) {
    .nav__menu {
      padding: 2rem 0.25rem 4rem;
    }

    .nav__list {
      column-gap: 0;
    }
  }
`;
