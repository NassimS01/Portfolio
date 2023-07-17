import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineLaptop,
  AiOutlineSend,
  AiOutlineClose,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { HeaderStyled } from "./HeaderStyles";

const Header = ({ className }) => {
  // Toggle Menu

  const [toggle, setToggle] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState(false);

  const handleLanguage = () => {
     setChangeLanguage()
  }

  return (
    <>
      <HeaderStyled className={className}>
        <nav className="nav container">
          <a href="/index.html" className="nav__logo">
            Nassim.dev
          </a>

          <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li href="" className="nav__item">
                <a href="#home" className="nav__link">
                  <AiOutlineHome className="nav__icon active-link" /> Home
                </a>
              </li>
              <li href="" className="nav__item">
                <a href="#about" className="nav__link">
                  <AiOutlineUser className="nav__icon" /> About
                </a>
              </li>
              <li href="" className="nav__item">
                <a href="#skills" className="nav__link">
                  <AiOutlineFileText className="nav__icon" /> Skills
                </a>
              </li>
              <li href="" className="nav__item">
                <a href="#projects" className="nav__link">
                  <AiOutlineLaptop className="nav__icon" /> Projects
                </a>
              </li>
              <li href="" className="nav__item">
                <a href="#contact" className="nav__link">
                  <AiOutlineSend className="nav__icon" /> Contact
                </a>
              </li>
              <div className="lang__menu">
                <div className="selected__lang">English</div>
                <ul>
                  <li>
                    <a className="sp">Spanish</a>
                  </li>
                </ul>
              </div>
            </ul>
            <AiOutlineClose
              className="nav__close"
              onClick={() => setToggle(!toggle)}
            />
          </div>
          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            <AiOutlineMenuFold size="25px" />
          </div>
        </nav>
      </HeaderStyled>
    </>
  );
};

export default Header;
