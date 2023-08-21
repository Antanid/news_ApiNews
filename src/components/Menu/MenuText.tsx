import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import style from "./style/style.module.scss";

type PropsMenuText = {
    menuLi: {
        path: string;
        name: string;
    }[];
    menuImg: string;
    onCloseBurger: () => any;
    urlLocation: string;
}

const MenuText: React.FC<PropsMenuText> = ({ menuImg, menuLi, onCloseBurger, urlLocation }) => {
    const { t } = useTranslation();
    return (
        <ul className={style.header_menu}>
            <Link to={"/"}>
                <li>
                    <img src={menuImg} alt="iconMenu" />
                </li>
            </Link>
            {menuLi.map((i) => (
                <Link
                    onClick={onCloseBurger}
                    className={urlLocation === i.path ? style.selected_menu_li : ""}
                    key={i.name}
                    to={i.path}
                >
                    <li className={style.menu_li_text}>{t(i.name)}</li>
                </Link>
            ))}
        </ul>
    )
}

export default MenuText