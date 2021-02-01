import React from 'react';
import logo from './../../assets/img/anime-logo.jpg';
import './../../assets/css/styles.css';


const Header = () => (
    <header>
        <div className="img-header">
            <img className="logo-header" src={ logo } alt=""/>
        </div>
    </header>   
);

Header.displayName = 'Header';

export default Header;

