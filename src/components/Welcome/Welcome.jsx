import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        <div className="welcome-header">
          <span className="welcome-tag">BIENVENIDO</span>
          <h2 className="welcome-title">Tlalnepantla: Historia y Modernidad</h2>
        </div>
        
        <div className="welcome-content">
          <p className="p-highlight">
            Bienvenido a Tlalnepantla, un rincón vibrante del Estado de México donde 
            la historia y la modernidad se entrelazan con el sabor de lo cotidiano.
          </p>
          
          <div className="welcome-grid">
            <p>
              Aquí, cada calle tiene algo que contar, desde antiguas raíces prehispánicas 
              hasta espacios contemporáneos llenos de vida. Conocido como <strong>“la tierra de en medio”</strong>, 
              Tlalnepantla es un punto de encuentro: de culturas, de sabores y de experiencias.
            </p>
            <p>
              Ya sea que busques un paseo tranquilo, descubrir rincones llenos de tradición o 
              simplemente disfrutar de buena comida, este destino te recibe con los brazos abiertos 
              y una esencia auténtica, artesanal y profundamente mexicana.
            </p>
          </div>
          
          <div className="welcome-footer">
            <p className="cta-text">PREPÁRATE PARA EXPLORAR, SABOREAR Y VIVIR TLALNEPANTLA.</p>
            <div className="accent-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;