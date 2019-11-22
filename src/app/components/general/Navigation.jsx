import React, { useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import MenuW from '../../assets/menu-white.svg';
import MenuB from '../../assets/menu-black.svg';
import closeB from '../../assets/menu-close-black.svg';
import { history } from '../../../utils/configureStore';

const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96]
  };

const Header = (props) => {
    const match = props.match;
    const location = props.location;
    let id = useLocation();


    const [ menuExpanded, setMenuExpanded] = useState(false);
    const [ languageExpanded, setLanguageExpanded] = useState(false);
    const [ animateMenu, setAnimateMenu ] = useState({});
    const [ animateLanguage, setAnimateLanguage ] = useState({});

    const expandMenu = useCallback(() => {
        if(menuExpanded === false) {
            setMenuExpanded(true);
            setAnimateMenu({
                x: "0%",
                transition
            });
        } else {
            setMenuExpanded(false);
            setAnimateMenu({
                x: "-100%",
                transition
            });
        }
    });

    const expandLanguage = useCallback(() => {
        if(languageExpanded === false) {
            setLanguageExpanded(true);
            setAnimateLanguage({
                x: "0%",
                transition
            });
        } else {
            setLanguageExpanded(false);
            setAnimateLanguage({
                x: "100%",
                transition
            });
        }
    });

    const languageHandlerFr = () => {
        history.push(`/fr${location.pathname.substring(3)}`);
        window.location.reload();
    }

    const languageHandlerNl = () => {
        history.push(`/nl${location.pathname.substring(3)}`);
        window.location.reload();
    }

    const languageHandlerLa = () => {
        history.push(`/la${location.pathname.substring(3)}`);
        window.location.reload();
    }


    let classNames = "header";
        
    if (menuExpanded === true) classNames += " expanded";
    else if (menuExpanded === false) classNames += "";
    if(languageExpanded === true) classNames += " expanded";
    else if(languageExpanded === false) classNames += "";


    return (
        <>
            <header className={classNames}>
                <div className="header-menu" onClick={ expandMenu }>
                    <img src={id.pathname !== match.url ? MenuB : MenuW } alt="menu-icon"/>
                    <span className={id.pathname !== match.url ? "dark" : "light"}>Menu</span>
                </div>
                <div className="header__language-selector" onClick={ expandLanguage }><p>{ match.params.locale.toUpperCase() }</p></div>

                <motion.section className="menu" animate={ animateMenu }>
                    <div className="menu__header" onClick={ expandMenu }>
                        <img src={ closeB } alt="menu-icon-close" />
                        <span className="dark">Fermer</span>
                    </div>
                    <div><a>Informations sur U.L.B</a></div>
                    <div><a>Devenir membre</a></div>
                    <div><a>Nous contacter</a></div>
                    <div className="menu__footer"><p>© {(new Date().getFullYear())} Unionlao</p></div>
                </motion.section>

                <motion.section className="language" animate={ animateLanguage }>
                    <div className="menu__header" onClick={ expandLanguage }>
                        <img src={ closeB } alt="menu-icon-close" />
                        <span className="dark">Fermer</span>
                    </div>
                    <div><p id="fr" onClick={ languageHandlerFr }>Français</p></div>
                    <div><p id="nl" onClick={ languageHandlerNl }>Nederlands</p></div>
                    <div><p id="la" onClick={ languageHandlerLa }>Lao</p></div>
                </motion.section>
            </header>
        </>
    )
}

export default Header;