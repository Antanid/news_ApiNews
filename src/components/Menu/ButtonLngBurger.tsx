import React from 'react'
import style from "./style/style.module.scss";

type PropsButtonLngBurger = {
    openBurgerMenu: boolean;
    selectedLanguage: string;
    openChangeLanguage: () => void;
    onOpenBurger: () => void;
    closeBurgerImg: string;
    burgerImg: string;
}

const ButtonLngBurger: React.FC<PropsButtonLngBurger> = ({ openBurgerMenu, selectedLanguage, openChangeLanguage, onOpenBurger, closeBurgerImg, burgerImg }) => {
    return (
        <div className={style.selected_lang}>
            {openBurgerMenu === false && (
                <button>
                    <img
                        src={selectedLanguage}
                        alt="selectedImg"
                        className={style.language_change}
                        onClick={openChangeLanguage}
                    />
                </button>
            )}

            <button onClick={onOpenBurger} className={style.burger_button}>
                <img
                    src={openBurgerMenu ? closeBurgerImg : burgerImg}
                    alt="burgerMenu"
                    className={style.burger_img}
                />
            </button>
        </div>
    )
}

export default ButtonLngBurger