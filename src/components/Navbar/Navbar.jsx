import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/VISITA.png" alt="Logo Tlalnepantla" />
        </div>
        <div className='logoT'>
          <img src="/logoT.png" alt="Logo Tlalnepantla" />
        </div>

        <div className={`nav-mobile-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="/" onClick={() => setIsOpen(false)}>INICIO</a></li>
          <li><a href="#historia" onClick={() => setIsOpen(false)}>HISTORIA</a></li>
          <li><a href="#experiencias" onClick={() => setIsOpen(false)}>EXPERIENCIAS</a></li>
          <li><a href="#gastronomia" onClick={() => setIsOpen(false)}>GASTRONOMIA</a></li>
          <li><a href="#contacto" onClick={() => setIsOpen(false)}>¿COMO LLEGAR?</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;