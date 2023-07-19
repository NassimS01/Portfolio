import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineLaptop,
  AiOutlineSend,
  AiOutlineClose,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { HeaderStyled } from "./HeaderStyles";
import { useTranslation } from "react-i18next";
import Switch from "../Switch/Switch";

const Header = ({ className }) => {
  // ChangeLanguage
  const { t, i18n } = useTranslation();

  // Toggle Menu
  const [toggle, setToggle] = useState(false);

  // Toggle Language
  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <>
      <HeaderStyled className={className}>
        <nav className="nav container">
          <div className="container-left">
            <a href="/index.html" className="nav__logo">
              Nassim.dev
            </a>
          </div>
          <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li href="" className="nav__item">
                <a href="#home" className="nav__link">
                  <AiOutlineHome className="nav__icon active-link" />
                  {t("home")}
                </a>
              </li>
              <li href="" className="nav__item">
                <a href="#about" className="nav__link">
                  <AiOutlineUser className="nav__icon" /> {t("about")}
                </a>
              </li>
              <li href="" className="nav__item">
                <a href="#skills" className="nav__link">
                  <AiOutlineFileText className="nav__icon" /> {t("skills")}
                </a>
              </li>
              <li href="" className="nav__item">
                <a href="#projects" className="nav__link">
                  <AiOutlineLaptop className="nav__icon" /> {t("projects")}
                </a>
              </li>
              <li href="" className="nav__item">
                <a href="#contact" className="nav__link">
                  <AiOutlineSend className="nav__icon" /> {t("contact")}
                </a>
              </li>
              <div className="lang__menu">
                <button className="selected__lang">
                  <BiWorld size="24px" className="icon-language" />{" "}
                  {localStorage.getItem("lng") == "es"
                    ? "Lenguaje"
                    : "Language"}
                </button>
                <ul>
                  <li>
                    <a className="sp" onClick={() => handleChangeLng("es")}>
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a className="en" onClick={() => handleChangeLng("en")}>
                      English
                    </a>
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
