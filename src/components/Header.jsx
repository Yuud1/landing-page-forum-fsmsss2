import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img className="logo-img" src="/images/Logo_FSMSSS__2_-removebg-preview.png" alt="Logo" />
                </div>
                <nav className="nav" id="navbar">
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/servicos">Serviços</Link></li>
                        <li><Link to="/portfolio">Portfólio</Link></li>
                    </ul>
                    <div className="lang-container">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/images/icons8-globe-64.png" alt="Globo" width="23" height="23"/>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item m-1" href="#"><img src="/images/bandeira-brasil.png" alt="Brasil" /></a></li>
                            <li><a className="dropdown-item m-1" href="#"><img src="/images/bandeira-eua.png" alt="EUA" /></a></li>
                            <li><a className="dropdown-item m-1" href="#"><img src="/images/bandeira-espanha.png" alt="Espanha" /></a></li>
                            <li><a className="dropdown-item m-1" href="#"><img src="/images/bandeira-franca.png" alt="França" /></a></li>
                        </ul>
                    </div>
                </nav>
                <div className="menu-hamburguer" id="menu-hamburguer">
                    <img src="/images/icon-hamburguer.png" alt="Menu Hamburguer" />
                </div>
            </div>
            <div className="overlay" id="overlay"></div>
        </header>
    );
};

export default Header;
