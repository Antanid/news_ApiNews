import React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import menuImg from "../../assets/menu_icon.png";
import uaFlag from "../../assets/flag-ua.png";
import usFlag from "../../assets/flag-us.png";
import plFlag from "../../assets/flag-pl.png";
import burgerImg from "../../assets/burger_menu.png";
import closeBurgerImg from "../../assets/close_burger.png";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { addBurgerStatus } from "../../redux/TopHeadlines/TopHeadlinesSlice";


import MenuText from "../../components/Menu/MenuText";
import ButtonLngBurger from "../../components/Menu/ButtonLngBurger";
import BurgerMenu from "../../components/Menu/BurgerMenu";
import LanguagePopUp from "../../components/Menu/LanguagePopUp";

import style from "../../components/Menu/style/style.module.scss"

const MenuPage: React.FC = () => {
  const { i18n } = useTranslation();
  const url = useLocation();
  const dispatch = useDispatch();
  const [menuLi] = useState([
    {
      name: "menu.general",
      path: "/general",
    },
    {
      name: "menu.business",
      path: "/business",
    },
    {
      name: "menu.entertainment",
      path: "/entertainment",
    },

    {
      name: "menu.health",
      path: "/health",
    },
    {
      name: "menu.science",
      path: "/science",
    },
    {
      name: "menu.sports",
      path: "/sports",
    },
    {
      name: "menu.technology",
      path: "/technology",
    },
  ]);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(uaFlag);
  const [languageLi] = useState([
    {
      icon: uaFlag,
      language: "ua",
    },
    { icon: usFlag, language: "us" },
    { icon: plFlag, language: "pl" },
  ]);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  useEffect(() => {
    switch (i18n.language) {
      case "ua":
        setSelectedLanguage(uaFlag);
        break;

      case "us":
        setSelectedLanguage(usFlag);
        break;

      case "pl":
        setSelectedLanguage(plFlag);
        break;

      default:
        setSelectedLanguage(uaFlag);
        break;
    }
  }, [i18n.language]);
  useEffect(() => {
    dispatch(addBurgerStatus(openBurgerMenu));
  }, [dispatch, openBurgerMenu]);

  const onChangeLanguage = (str: string, str2: string) => {
    setSelectedLanguage(str);
    i18n.changeLanguage(str2);
    setLanguageOpen(false);
  };
  const openChangeLanguage = () => {
    setLanguageOpen(!languageOpen);
  };
  const onOpenBurger = () => {
    setOpenBurgerMenu(!openBurgerMenu);
  };
  const onCloseBurger = () => {
    setOpenBurgerMenu(false);
  };

  return (
    <header >
      <MenuText
        menuImg={menuImg}
        menuLi={menuLi}
        onCloseBurger={onCloseBurger}
        urlLocation={url.pathname}
      />
      <ButtonLngBurger
        openBurgerMenu={openBurgerMenu}
        selectedLanguage={selectedLanguage}
        openChangeLanguage={openChangeLanguage}
        onOpenBurger={onOpenBurger}
        closeBurgerImg={closeBurgerImg}
        burgerImg={burgerImg}
      />

      <BurgerMenu
        openBurgerMenu={openBurgerMenu}
        menuLi={menuLi}
        onCloseBurger={onCloseBurger}
        urlLocation={url.pathname}
      />

      <LanguagePopUp
        languageOpen={languageOpen}
        languageLi={languageLi}
        selectedLanguage={selectedLanguage}
        onChangeLanguage={onChangeLanguage}
      />

    </header>
  );
};

export default MenuPage;
