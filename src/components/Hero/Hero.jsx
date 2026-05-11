import React from 'react';
import './Hero.css';

function Hero() {
  const videoId = "MoCeBqh6EFk";

  // Agregamos mute=1 explícitamente (los navegadores bloquean el autoplay con sonido)
  // y nos aseguramos de que el loop funcione correctamente con playlist.
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&iv_load_policy=3&enablejsapi=1&modestbranding=1&playsinline=1&showinfo=0`;

  return (
    <header className="hero-full">
      <div className="video-background-container">
        <iframe
          className="video-bg-iframe"
          src={videoSrc}
          // Cambiamos el título para que sea único y evitar errores de accesibilidad
          title="Video de fondo de Tlalnepantla"
          frameBorder="0"
          // CRÍTICO: Añadimos 'allow="autoplay"' para que el navegador de permiso al iframe
          allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
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