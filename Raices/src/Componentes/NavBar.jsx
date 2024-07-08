import React, { useState } from 'react';
import '../styles/NavBar.css'; // Importa el archivo de estilos CSS
import logo from '../assets/logog.svg';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>

      </div>
      <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
        <li className="navbar-item"><a href="#home">Inicio</a></li>
        <li className="navbar-item"><a href="#work">Obras</a></li>
        <li className="navbar-item"><a href="#process">Process</a></li>
        <li className="navbar-item"><a href="#about">Nosotros</a></li>
        <li className="navbar-item"><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
