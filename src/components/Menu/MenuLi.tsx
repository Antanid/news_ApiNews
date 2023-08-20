import React from "react";
import { Link } from "react-router-dom";
import style from "./style/style.module.scss";
import { useTranslation } from "react-i18next";

type menuLiProps = {
  menuLi: {
    path: string;
    name: string;
  }[];
  menuImg: string;
  languageLi: {
    language: string;
    icon: string;
  }[];
  selectedLanguage: string;
  onChangeLanguage: (str: string, str2: string) => void;
  languageOpen: boolean;
  openChangeLanguage: () => void;
  urlLocation: string;
  burgerImg: string;
  onOpenBurger: () => void;
  closeBurgerImg: string;
  openBurgerMenu: boolean;
  onCloseBurger: () => any;
};

const MenuLi: React.FC<menuLiProps> = ({
  menuLi,
  menuImg,
  languageLi,
  selectedLanguage,
  onChangeLanguage,
  languageOpen,
  openChangeLanguage,
  urlLocation,
  burgerImg,
  onOpenBurger,
  closeBurgerImg,
  openBurgerMenu,
  onCloseBurger
}) => {
  const { t } = useTranslation();
  return (

    <header className={style.header_main}>
      <ul className={openBurgerMenu ? style.header_menu_burger : style.header_menu}>
        <Link to={"/"}>
          <li>
            <img src={menuImg} alt="iconMenu" />
          </li>
        </Link>
        {menuLi.map((i) => (
          <Link
            onClick={onCloseBurger}
            className={urlLocation === i.path ? style.selected_menu_li : ''}
            key={i.name}
            to={i.path}
          >
            <li className={style.menu_li_text}
            >{t(i.name)}</li>
          </Link>
        ))}

      </ul>
      <div className={style.selected_lang}>
        <button>
          <img
            src={selectedLanguage}
            alt="selectedImg"
            className={style.language_change}
            onClick={openChangeLanguage}
          />
        </button>
        <button onClick={onOpenBurger} className={style.burger_button}>
          <img
            src={openBurgerMenu ? closeBurgerImg : burgerImg}
            alt="burgerMenu"
            className={style.burger_img}
          />
        </button>
      </div>

      {languageOpen && (
        <div className={style.select_language}>
          <ul>
            {languageLi.map((i) => (
              <li
                className={selectedLanguage === i.icon ? style.selected_li : ""}
                onClick={() => onChangeLanguage(i.icon, i.language)}
                key={i.language}
              >
                <img src={i.icon} alt="flag" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>

  );
};

export default MenuLi;
