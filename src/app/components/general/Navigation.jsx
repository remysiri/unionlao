import React from 'react';

import Menu from '../../assets/menu-white.svg'

const Header = (props) => {
    const language = props.lang;
    return (
        <>
            <header>
                <div className="header-menu"><img src={ Menu } alt="menu-icon"/><span>Menu</span></div>
                <div className="header__language-selector"><a href="#">{ language.toUpperCase() }</a></div>
            </header>
        </>
    )
}

export default Header;