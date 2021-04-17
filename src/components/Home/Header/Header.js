import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbars from '../Navbars/Navbars';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbars />
            <HeaderMain />
        </div>
    );
};

export default Header;