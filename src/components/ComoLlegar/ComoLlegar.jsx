import React from 'react';
import './ComoLlegar.css';

function ComoLlegar() {
  return (
    <section className="llegar-section" id="contacto">
      <div className="llegar-container">
        <div className="llegar-header">
          <span className="llegar-tag">GUÍA DE VIAJE</span>
          <h2 className="llegar-title">Cómo llegar</h2>
          <div className="sc-line" style={{ margin: '0 auto', maxWidth: '100px', height: '2px', background: '#D9C3A3' }}></div>
        </div>

        <div className="llegar-grid">
          {/* BLOQUE: AUTOMÓVIL */}
          <div className="llegar-card">
            <div className="llegar-icon">
              <img src="./coche.png" alt="coche" />
            </div>
            <h3 className="llegar-subtitle">En automóvil</h3>
            <div className="ruta-item">
              <strong>Desde CDMX:</strong>
              <p>Anillo Periférico Norte hacia Naucalpan/Tlalnepantla. Salidas Gustavo Baz o Mario Colín. (30–50 min)</p>
            </div>
            <div className="ruta-item">
              <strong>Desde Querétaro:</strong>
              <p>Autopista México–Querétaro (57D). Salida en dirección a Tlalnepantla / Periférico Norte. (2–2.5 hrs)</p>
            </div>
            <div className="ruta-item">
              <strong>Desde Toluca:</strong>
              <p>Autopista hacia CDMX, conecta con Periférico Norte rumbo a Tlalnepantla. (1–1.5 hrs)</p>
            </div>
            <div className="glass-btn-container">
              <a href="https://www.google.com/maps/dir//Tlalnepantla+de+Baz,+Edo.+de+M%C3%A9xico" target="_blank" rel="noreferrer" className="btn-glass-maps">
                <span>VER RUTA EN AUTO</span>
              </a>
            </div>
          </div>

          {/* BLOQUE: TRANSPORTE PÚBLICO */}
          <div className="llegar-card">
            <div className="llegar-icon">
              <img src="./tren.png" alt="tren" />
            </div>
            <h3 className="llegar-subtitle">Transporte Público</h3>
            <div className="ruta-item">
              <strong>Tren Suburbano:</strong>
              <p>Aborda en Buenavista (CDMX) y baja en la estación Tlalnepantla. (25 min)</p>
            </div>
            <div className="ruta-item">
              <strong>Metro + Bus:</strong>
              <p>Llega a El Rosario (L6 y L7) y toma autobús o combi hacia el centro. (45–70 min)</p>
            </div>
            <div className="ruta-item">
              <strong>Autobús:</strong>
              <p>Salidas desde Indios Verdes u Observatorio. Opción económica y constante.</p>
            </div>
            <div className="glass-btn-container">
              <a href="https://www.google.com/maps/search/Estacion+Tren+Suburbano+Tlalnepantla" target="_blank" rel="noreferrer" className="btn-glass-maps">
                <span>UBICAR ESTACIONES</span>
              </a>
            </div>
          </div>

          {/* BLOQUE: AEROPUERTO Y APPS */}
          <div className="llegar-card">
            <div className="llegar-icon">
              <img src="./avion.png" alt="avion" />
            </div>
            <h3 className="llegar-subtitle">Desde el Aeropuerto</h3>
            <div className="ruta-item">
              <strong>AICM (CDMX):</strong>
              <p>Toma Circuito Interior y conecta con Periférico Norte. (40–60 min)</p>
            </div>
            <div className="ruta-item">
              <strong>Servicios Digitales:</strong>
              <p>Uber, Didi y taxis de sitio operan con normalidad hacia la zona norte.</p>
            </div>
            <div className="glass-btn-container">
              <a href="https://www.google.com/maps/dir/AICM,+CDMX/Tlalnepantla" target="_blank" rel="noreferrer" className="btn-glass-maps">
                <span>ABRIR EN GOOGLE MAPS</span>
              </a>
            </div>
          </div>
        </div>
      </div>

<footer className="site-footer">
        <a 
          href="https://www.facebook.com/profile.php?id=61572892183723" 
          target="_blank" 
          rel="noreferrer" 
          className="social-link-fb"
          aria-label="Facebook"
        >
          <svg 
            viewBox="0 0 24 24" 
            width="28" 
            height="28" 
            fill="#8C4A5A" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <p>Coordinación de Turismo - Tlalnepantla</p>
        </a>
      </footer>
    </section>
  );
}

export default ComoLlegar;