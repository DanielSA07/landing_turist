import React from 'react';
import './Hero.css';

function Hero() {
  const videoId = "MoCeBqh6EFk";

  // Mantenemos mute=1, autoplay=1 y playsinline=1 como prioridad
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&iv_load_policy=3&enablejsapi=1&modestbranding=1&playsinline=1`;

  return (
    <header className="hero-full">
      <div className="video-background-container">
        <iframe
          className="video-bg-iframe"
          src={videoSrc}
          title="Video de fondo de Tlalnepantla"
          frameBorder="0"
          // AJUSTE CRÍTICO: Añadimos 'autoplay' y 'fullscreen' explícitos en allow
          allow="autoplay; fullscreen; accelerometer; encrypted-media; gyroscope; picture-in-picture"
          // Evitamos que el usuario interactúe con el iframe en mobile
          style={{ pointerEvents: 'none' }}
          tabIndex="-1"
        ></iframe>
      </div>
      
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>TLALNEPANTLA: UN DESTINO POR DESCUBRIR</h1>
          <p>Tu Guía Exclusiva para la Aventura e Historia</p>
        </div>
      </div>
    </header>
  );
}

export default Hero;