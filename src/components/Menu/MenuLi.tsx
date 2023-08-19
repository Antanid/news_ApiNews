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
};

const MenuLi: React.FC<menuLiProps> = ({
  menuLi,
  menuImg,
  languageLi,
  selectedLanguage,
  onChangeLanguage,
  languageOpen,
  openChangeLanguage,
}) => {
  const { t } = useTranslation();
  return (
    <header>
      <ul className={style.header_menu}>
        <Link to={"/"}>
          <li>
            <img src={menuImg} alt="iconMenu" />
          </li>
        </Link>
        {menuLi.map((i) => (
          <Link key={i.name} to={i.path}>
            <li>{t(i.name)}</li>
          </Link>
        ))}
      </ul>
      <div className={style.selected_lang}>
        <img
          src={selectedLanguage}
          alt="selectedImg"
          className={style.language_change}
          onClick={openChangeLanguage}
        />
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
