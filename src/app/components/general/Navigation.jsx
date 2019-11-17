import React from 'react';

import Menu from '../../assets/menu-white.svg'

const Header = () => {
    return (
        <>
            <header>
                <div className="header-menu"><img src={ Menu } alt="menu-icon"/></div>
                <div className="header__language-selector"><a href="#">FR</a></div>
            </header>
        </>
    )
}

export default Header;