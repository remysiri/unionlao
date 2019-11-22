import React, { useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import MenuW from '../../assets/menu-white.svg';
import MenuB from '../../assets/menu-black.svg';
import closeB from '../../assets/menu-close-black.svg';

const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96]
  };

const Header = (props) => {
    const match = props.match;
    const switchLang = props.onClick;
    let id = useLocation();


    const [ menuExpanded, setMenuExpanded] = useState(false);
    const [ animateMenu, setAnimateMenu ] = useState({});
    const menuIcon = useRef();

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


    let classNames = "header";
        
    if (menuExpanded === true) classNames += " expanded";
    else if (menuExpanded === false) classNames += "";


    return (
        <>
            <header className={classNames}>
                <div className="header-menu" ref={ menuIcon } onClick={ expandMenu }>
                    <img src={id.pathname !== match.url ? MenuB : MenuW } alt="menu-icon"/>
                    <span className={id.pathname !== match.url ? "dark" : "light"}>Menu</span>
                </div>
                <div className="header__language-selector" onClick={ switchLang }><p>{ match.params.locale.toUpperCase() }</p></div>
                <motion.section className="menu" animate={ animateMenu }>
                    <div className="menu__header" ref={ menuIcon } onClick={ expandMenu }><img src={ closeB } alt="menu-icon-close" /><span className="dark">Fermer</span></div>
                    <div><a>Informations sur U.L.B</a></div>
                    <div><a>Devenir membre</a></div>
                    <div><a>Nous contacter</a></div>
                    <div className="menu__footer"><p>© {(new Date().getFullYear())} Unionlao</p></div>
                </motion.section>
            </header>
        </>
    )
}

export default Header;