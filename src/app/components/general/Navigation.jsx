import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import arrowDown from '../../assets/arrow-down.svg';
import MenuB from '../../assets/menu-black.svg';
import closeB from '../../assets/menu-close-black.svg';
import Logo from '../../assets/logo.png';
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
                x: "100%",
                transition
            });
        }
    });

    const expandLanguage = useCallback(() => {
        if(languageExpanded === false) {
            setLanguageExpanded(true);
            setAnimateLanguage({
                y: "0%",
                transition
            });
        } else {
            setLanguageExpanded(false);
            setAnimateLanguage({
                y: "-140%",
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

    console.log(match);


    return (
        <>
            <header className={classNames}>
                <div className="header-logo">
                    <img src={ Logo } alt="logo" />
                    <span>Union des Lao en Belgique</span>
                </div>

                <div className="header-right">
                    <div className="header-navigation">
                        <li>Evenements</li>
                        <li>Media</li>
                    </div>
                    <div className="header-language" onClick={ expandLanguage }>
                        { (() => {
                            switch(match.params.locale) {
                                case 'fr':
                                    return <span>Français</span>;
                                    break;
                                case 'nl':
                                    return <span>Nederlands</span>;
                                    break;
                                case 'la':
                                    return <span>ພາສາລາວ</span>;
                                    break;
                            }
                        })()}
                        <img src={arrowDown} alt="menu-icon"/>

                        <div className="language__wrapper">
                            <motion.section className="language" animate={ animateLanguage }>
                                <div><p id="fr" className={ match.params.locale === 'fr' ? 'active' : '' } onClick={ languageHandlerFr }>Français</p></div>
                                <div><p id="nl" className={ match.params.locale === 'nl' ? 'active' : '' } onClick={ languageHandlerNl }>Nederlands</p></div>
                                <div><p id="la" className={ match.params.locale === 'la' ? 'active' : '' } onClick={ languageHandlerLa }>ພາສາລາວ</p></div>
                            </motion.section>
                        </div>
                    </div>
                    <div className="header-menu" onClick={ expandMenu }>
                        <span>Menu</span>
                        <img src={MenuB} alt="menu-icon"/>
                    </div>
                </div>

                <motion.section className="menu" animate={ animateMenu }>
                    <div className="menu__header" onClick={ expandMenu }>
                        <img src={ closeB } alt="menu-icon-close" />
                        <span>Fermer</span>
                    </div>
                    <div><a>Informations sur U.L.B</a></div>
                    <div><a>Devenir membre</a></div>
                    <div><a>Nous contacter</a></div>
                </motion.section>
            </header>
        </>
    )
}

export default Header;