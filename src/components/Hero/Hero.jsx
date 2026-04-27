import React from 'react';
import './Hero.css';

function Hero() {
  const videoId = "MoCeBqh6EFk";

  // URL Optimizada: Eliminamos el origin dinámico para evitar conflictos en localhost
  // y añadimos enablejsapi=1 junto con v=3 para asegurar compatibilidad.
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&iv_load_policy=3&enablejsapi=1&modestbranding=1&playsinline=1`;

  return (
    <header className="hero-full">
      <div className="video-background-container">
        <iframe
          className="video-bg-iframe"
          src={videoSrc}
          title="Tlalnepantla Video Background"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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