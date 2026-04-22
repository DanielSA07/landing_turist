import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <header className="hero-full">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/video.mov" type="video/mp4" />
      </video>
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>TLALNEPANTLA: UN DESTINO POR DESCUBRIR</h1>
          <p>Tu Guía Exclusiva para la Aventura y la Historia</p>
        </div>
      </div>
    </header>
  );
}

export default Hero;