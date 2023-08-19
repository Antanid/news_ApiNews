import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MenuLi from "../../components/Menu/MenuLi";
import menuImg from "../../assets/menu_icon.png";
import uaFlag from "../../assets/flag-ua.png";
import usFlag from "../../assets/flag-us.png";
import plFlag from "../../assets/flag-pl.png";

const MenuPage = () => {
  const { i18n } = useTranslation();
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
    }
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

  const onChangeLanguage = (str: string, str2: string) => {
    setSelectedLanguage(str);
    i18n.changeLanguage(str2);
    setLanguageOpen(false);
  };
  const openChangeLanguage = () => {
    setLanguageOpen(!languageOpen);
  };
  console.log(selectedLanguage);
  return (
    <div>
      <MenuLi
        openChangeLanguage={openChangeLanguage}
        languageOpen={languageOpen}
        languageLi={languageLi}
        onChangeLanguage={onChangeLanguage}
        selectedLanguage={selectedLanguage}
        menuImg={menuImg}
        menuLi={menuLi}
      />
    </div>
  );
};

export default MenuPage;
