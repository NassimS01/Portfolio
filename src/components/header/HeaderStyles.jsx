import { styled } from "styled-components";

export const HeaderStyled = styled.header.attrs({ className: "header" })`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0px 12px;
  background-color: var(--color-navbar);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 0 0 1.5rem 1.5rem;

  & .nav {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
  }

  & .container-left {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  & .nav__logo,
  .nav__toggle {
    color: var(--color-text);
    font-weight: var(--font-semi-bold);
    font-size: 20px;
  }

  & .nav__list {
    display: flex;
    column-gap: 2rem;
  }

  & .nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-text);
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
    background-color: transparent;
    transition: 0.3s;
    color: var(--color-text);
    font-weight: var(--font-medium);
    font-size: 16px;
  }

  & .icon-language {
    margin-right: 5px;
  }

  & .lang__menu ul {
    position: absolute;
    margin-left: -5px;
    background: var(--color-navbar);
    color: var(--color-text);
    border: 1px solid #f8f8f8;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: none;
  }

  & .lang__menu ul li a:hover {
    background: var(--background-body);
  }

  & .lang__menu:hover ul {
    display: block;
  }

  & .lang__menu ul li a {
    padding: 4px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
  }

  & .lang__menu ul li .sp:before {
    content: "";
    display: flex;
    margin-right: 5px;
    width: 24px;
    height: 24px;
    margin-right: 5px;
    background-image: url("https://flagsapi.com/ES/flat/24.png");
  }

  & .lang__menu ul li .en:before {
    content: "";
    display: flex;
    margin-right: 5px;
    width: 24px;
    height: 24px;
    margin: 0px 5px 0px -7px;
    background-image: url("https://flagsapi.com/US/flat/24.png");
  }

  /* ACTIVE LINK */

  & .active-link,
  .nav__link:hover,
  .selected__lang:hover {
    color: var(--link-color-hover);
  }



  @media screen and (max-width: 840px) {
    top: initial;
    bottom: 0;
    padding: 0px 13px;
    .nav {
      height: 50px;
    }

    .nav__menu {
      position: fixed;
      bottom: -100%;
      left: 0;
      width: 100%;
      z-index: 1000;
      background-color: var(--color-navbar);
      padding: 2rem 1.5rem 4rem;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: 0.3s;
      /* z-index: var(--z-tooltip); */
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

    .selected__lang {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .icon-language {
      width: 16px;
      height: 16px;
      margin-bottom: 2px;
    }

    & .lang__menu ul {
      margin-left: -100px;
    }

    & .lang__menu:hover ul {
      display: flex;
      flex-direction: row;
    }

    .nav__icon {
      font-size: 1.2rem;
    }

    .nav__close {
      position: absolute;
      left: 1.3rem;
      bottom: 0.7rem;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--color-text);
    }

    .nav__close:hover {
      color: var(--link-color-hover);
    }

    .nav__toggle {
      cursor: pointer;
      transform: rotate(90deg);
      z-index: 1;
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
