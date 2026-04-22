import React from 'react';
import './SectionCards.css';

function SectionCards({ title, data }) {
  return (
    <section className="cards-container">
      <div className="cards-header">
        <h2 className="cards-title">{title}</h2>
        <div className="cards-line"></div>
      </div>
      <div className="cards-grid">
        {data.map(item => (
          <div key={item.id} className="item-card">
            <div className="item-img-wrapper">
              <img src={item.imagen} alt={item.nombre} />
              <span className="item-badge">{item.categoria || 'RECOMENDADO'}</span>
            </div>
            <div className="item-content">
              <h3 className="item-name">{item.nombre}</h3>
              <p className="item-address">{item.direccion}</p>
              <div className="item-footer">
                <a href={item.webLink} className="btn-web">SITIO WEB</a>
                <a href={item.mapLink} className="btn-map">MAPA</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionCards;