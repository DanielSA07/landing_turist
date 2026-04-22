import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">TLALNEPANTLA <span>TURÍSTICA</span></div>
        
        {/* Icono Hamburguesa */}
        <div className="nav-mobile-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? "line open" : "line"}></div>
          <div className={isOpen ? "line open" : "line"}></div>
          <div className={isOpen ? "line open" : "line"}></div>
        </div>

        {/* Links del Menú */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#atractivos" onClick={() => setIsOpen(false)}>Atractivos</a></li>
          <li><a href="#gastronomia" onClick={() => setIsOpen(false)}>Gastronomía</a></li>
          <li><a href="#hoteles" onClick={() => setIsOpen(false)}>Hospedaje</a></li>
          <li><a href="#contacto" onClick={() => setIsOpen(false)}>Cómo llegar</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;