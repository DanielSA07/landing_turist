import React, { useState } from 'react';
import './GridAtractivos.css';

const dataAtractivos = {
  queHacer: [
    { id: 1, nombre: "Catedral de Corpus Christi", desc: "Ícono histórico y arquitectónico del municipio.", cat: "CULTURA", img: "https://images.unsplash.com/photo-1548588627-f9785d20fd13?q=80&w=800" },
    { id: 2, nombre: "Plaza Gustavo Baz", desc: "Corazón social de Tlalnepantla, ideal para un paseo local.", cat: "PLAZA", img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=800" },
    { id: 3, nombre: "Centro Histórico", desc: "Explora las raíces y tradiciones de la Tierra de Enmedio.", cat: "HISTORIA", img: "https://images.unsplash.com/photo-1531265726475-52ad60219627?q=80&w=800" },
    { id: 4, nombre: "Parque Tezozómoc", desc: "Un pulmón verde cercano para conectar con la naturaleza.", cat: "NATURALEZA", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" },
  ],
  compras: [
    { id: 5, nombre: "Mundo E", desc: "Entretenimiento y compras de nivel internacional.", link: "https://mundoe.com.mx/", cat: "MALL", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800" },
    { id: 6, nombre: "Plaza Tlalne Fashion Mall", desc: "Moda y las mejores marcas en un solo lugar.", link: "https://plazatlalne.com/", cat: "FASHION", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800" },
    { id: 7, nombre: "Sentura Tlalnepantla", desc: "Espacios contemporáneos para un día de shopping.", link: "https://senturatlalnepantla.mx/", cat: "MODERNO", img: "https://images.unsplash.com/photo-1600712242805-5f50ef903bc4?q=80&w=800" },
    { id: 8, nombre: "Multi Plaza Valle Dorado", desc: "Variedad y conveniencia en la zona norte.", link: "https://www.multiplaza.com.mx/multiplaza-valle-dorado/", cat: "CONVENIENCIA", img: "https://images.unsplash.com/photo-1534452286302-2f5630b60391?q=80&w=800" },
  ],
  consientete: [
    { id: 9, nombre: "Sports World Plaza Tlalne", desc: "Instalaciones premium para tu entrenamiento.", link: "https://www.sportsworld.com.mx/", cat: "GYM", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800" },
    { id: 10, nombre: "Planet Fitness", desc: "Ambiente libre de críticas para ejercitarte.", link: "https://www.planetfitness.com.mx/", cat: "GYM", img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800" },
    { id: 11, nombre: "Fit24 Jinetes", desc: "Entrenamiento 24/7 cerca de ti.", link: "http://google.com/maps?q=Fit24+Jinetes", cat: "GYM", img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800" },
    { id: 12, nombre: "World Fitness Gym", desc: "Fuerza y disciplina en Tlalnepantla.", link: "http://google.com/maps?q=World+Fitness+Gym+Tlalnepantla", cat: "GYM", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800" },
    { id: 13, nombre: "American Fitness Center", desc: "Calidad y comunidad deportiva.", link: "http://google.com/maps?q=American+Fitness+Center+Tlalnepantla", cat: "GYM", img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800" },
    { id: 14, nombre: "Sport Gym Universe", desc: "Variedad de equipo y ambiente motivador.", link: "http://google.com/maps?q=Sport+Gym+Universe+Tlalnepantla", cat: "GYM", img: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=800" },
    { id: 15, nombre: "BODY ELEMENT GYM", desc: "Tu estilo de vida fitness en un solo lugar.", link: "http://google.com/maps?q=Body+Element+Gym+Tlalnepantla", cat: "GYM", img: "https://images.unsplash.com/photo-1574673139011-570883e1836b?q=80&w=800" },
    { id: 16, nombre: "D’ Gym Fitness Center", desc: "Atención personalizada y equipo moderno.", link: "http://google.com/maps?q=D+Gym+Fitness+Tlalnepantla", cat: "GYM", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800" },
    { id: 17, nombre: "Gimnasio Bucaneros", desc: "Tradición y fuerza en la zona.", link: "http://google.com/maps?q=Gimnasio+Bucaneros+Tlalnepantla", cat: "GYM", img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800" },
    { id: 18, nombre: "The North Fitness", desc: "Entrenamiento funcional de alta intensidad.", link: "http://google.com/maps?q=The+North+Fitness+Tlalnepantla", cat: "GYM", img: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=800" },
    { id: 19, nombre: "Gym Monster", desc: "Saca el máximo provecho a tu rutina.", link: "http://google.com/maps?q=Gym+Monster+Tlalnepantla", cat: "GYM", img: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=800" },
    { id: 20, nombre: "FW Fitness", desc: "Espacio moderno para tu bienestar físico.", link: "http://google.com/maps?q=FW+Fitness+Tlalnepantla", cat: "GYM", img: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=800" },
    { id: 21, nombre: "Garage Fitness Mx", desc: "Entrenamiento dinámico y comunidad activa.", link: "http://google.com/maps?q=Garage+Fitness+Tlalnepantla", cat: "GYM", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800" }
  ]
};

function GridAtractivos() {
  const [activeTab, setActiveTab] = useState('queHacer');
  const [showMore, setShowMore] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowMore(false);
  };

  const currentData = dataAtractivos[activeTab];
  const displayData = showMore ? currentData : currentData.slice(0, 6);

  return (
    <section className="atractivos-section" id="atractivos">
      <div className="atractivos-container">
        <div className="tabs-header">
          {['queHacer', 'compras', 'consientete'].map((tab) => (
            <button 
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`} 
              onClick={() => handleTabChange(tab)}
            >
              {tab === 'queHacer' ? 'QUÉ HACER' : tab === 'compras' ? 'DE COMPRAS' : 'CONSIÉNTETE'}
            </button>
          ))}
        </div>

        <div className="atractivos-grid">
          {displayData.map(item => (
            <div key={item.id} className="sc-card">
              <div className="sc-img-wrapper">
                <img src={item.img} alt={item.nombre} loading="lazy" />
                <span className="sc-badge">{item.cat}</span>
              </div>
              <div className="sc-content">
                <h3 className="sc-name">{item.nombre}</h3>
                <p className="sc-desc">{item.desc}</p>
                <div className="sc-footer">
                  <a href={item.link || "#"} target="_blank" rel="noreferrer" className="sc-btn-web">
                    {item.link ? 'SITIO WEB' : 'INFO'}
                  </a>
                  <a href={`https://www.google.com/maps/search/${encodeURIComponent(item.nombre + " Tlalnepantla")}`} target="_blank" rel="noreferrer" className="sc-btn-map">UBICACIÓN</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {currentData.length > 6 && (
          <div className="view-more-container">
            <button className="btn-view-more" onClick={() => setShowMore(!showMore)}>
              {showMore ? "MOSTRAR MENOS" : "VER TODAS LAS OPCIONES"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default GridAtractivos;