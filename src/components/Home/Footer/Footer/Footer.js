import React from 'react';
import './Footer.css'
import FooterHead from '../FooterHead/FooterHead';
import FooterMain from '../FooterMain/FooterMain';
import FooterBottom from '../FooterBottom/FooterBottom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <FooterHead />
            <hr />
            <FooterMain />
            <FooterBottom />
        </footer>
    );
};

export default Footer;