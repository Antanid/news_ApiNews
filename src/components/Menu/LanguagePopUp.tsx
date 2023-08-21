import React from 'react'


import style from "./style/style.module.scss";

type PropsLanguagePopUp = {
    languageOpen: boolean;
    languageLi: {
        language: string;
        icon: string;
    }[];
    selectedLanguage: string;
    onChangeLanguage: (str: string, str2: string) => void;
}

const LanguagePopUp: React.FC<PropsLanguagePopUp> = ({ languageOpen, languageLi, selectedLanguage, onChangeLanguage }) => {
    return (
        <>
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
        </>
    )
}

export default LanguagePopUp