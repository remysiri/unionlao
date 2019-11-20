import React from 'react';

import MenuW from '../../assets/menu-white.svg';
import MenuB from '../../assets/menu-black.svg';

const Header = (props) => {
    const language = props.lang;
    return (
        <>
            <header>
                <div className="header-menu"><img src={ MenuW } alt="menu-icon"/><span>Menu</span></div>
                <div className="header__language-selector"><a href="#">{ language.toUpperCase() }</a></div>
            </header>
        </>
    )
}

export default Header;