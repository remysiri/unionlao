import React from 'react';
import { useLocation } from 'react-router-dom';

import MenuW from '../../assets/menu-white.svg';
import MenuB from '../../assets/menu-black.svg';

const Header = (props) => {
    const language = props.lang;
    let id = useLocation();
    console.log(id.pathname);
    return (
        <>
            <header>
                <div className="header-menu"><img src={id.pathname != "/" ? MenuB : MenuW } alt="menu-icon"/><span className={id.pathname != "/" ? "dark" : "light"}>Menu</span></div>
                <div className="header__language-selector"><a href="#">{ language.toUpperCase() }</a></div>
            </header>
        </>
    )
}

export default Header;