import React, { useEffect, useRef, useState } from 'react';
import './Welcome.css';

function Welcome() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Solo activamos cuando entra en el viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Una vez que se anima, dejamos de observar para mejorar el performance
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Se activa cuando el 15% es visible
        rootMargin: "0px 0px -80px 0px" // Retrasa la activación 80px para que el usuario ya esté viendo la zona
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const revealClass = isVisible ? "reveal" : "";

  return (
    <section className="welcome-section" ref={sectionRef}>
      <div className="welcome-container">
        <div className="welcome-header">
          <span className={`welcome-tag ${revealClass} delay-1`}>BIENVENIDO</span>
          <h2 className={`welcome-title ${revealClass} delay-2`}>Tlalnepantla: Historia y Modernidad</h2>
        </div>
        
        <div className="welcome-content">
          <p className={`p-highlight ${revealClass} delay-3`}>
            Bienvenido a Tlalnepantla, un rincón vibrante del Estado de México donde 
            la historia y la modernidad se entrelazan con el sabor de lo cotidiano.
          </p>
          
          <div className={`welcome-grid ${revealClass} delay-4`}>
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
            <p className={`cta-text ${revealClass} delay-5`}>PREPÁRATE PARA EXPLORAR, SABOREAR Y VIVIR TLALNEPANTLA.</p>
            <div className={`accent-line ${isVisible ? "animate-line" : ""}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;