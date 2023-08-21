import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import style from "./style/style.module.scss";

type PropsBurgerMenu = {
    openBurgerMenu: boolean;
    menuLi: {
        path: string;
        name: string;
    }[];
    onCloseBurger: () => any;
    urlLocation: string;
}

const BurgerMenu: React.FC<PropsBurgerMenu> = ({ openBurgerMenu, menuLi, onCloseBurger, urlLocation }) => {
    const { t } = useTranslation();
    return (
        <div className={style.burger_menu}>
            <ul className={openBurgerMenu ? style.burger_ul : style.burger_close}>
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
        </div>
    )
}

export default BurgerMenu