import React, { useState, useEffect, useRef } from 'react';
import './Hospedaje.css';

const hoteles = [
  { id: 1, nombre: "Crowne Plaza", desc: "Confort, negocios y excelente ubicación.", link: "https://www.ihg.com/crowneplaza/hotels/us/en/tlalnepantla/mexlm/hoteldetail", cat: "BUSINESS PREMIUM", img: "https://content.r9cdn.net/rimg/himg/af/26/ad/leonardo-2679904-MEXLM_4511041566_O-490867.jpg?width=500&height=350&xhint=1620&yhint=1000&crop=true" },
  { id: 2, nombre: "Fiesta Inn", desc: "Moderno, funcional y con servicios accesibles.", link: "https://www.fiestamericanatravelty.com/fiesta-inn/hoteles/fiesta-inn-tlalnepantla", cat: "BUSINESS", img: "https://image-tc.galaxy.tf/wijpeg-bzfzabtlgcpmdun40vmvbsoca/70369098-fiesta-inn-tlalnepantla-4414x2943-result.jpg" },
  { id: 3, nombre: "Real Inn Perinorte", desc: "Ideal para viajes familiares o de trabajo.", link: "https://www.grupocaminoreal.com/real-inn-perinorte", cat: "FAMILIAR", img: "https://content.skyscnr.com/available/2527612140/2527612140_WxH.jpg" },
  { id: 4, nombre: "City Express", desc: "Práctico, accesible y funcional.", link: "https://www.marriott.com/en-us/hotels/mexxb-city-express-ciudad-de-mexico-tlalnepantla/overview/", cat: "PRÁCTICO", img: "https://media-cdn.tripadvisor.com/media/photo-s/1d/ae/9f/d9/ubicado-dentro-del-centro.jpg" },
  { id: 5, nombre: "Mandarin Carton", desc: "Elegancia y atención personalizada de primer nivel.", link: "https://www.hotelmandarincarton.com.mx/", cat: "ELEGANTE", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/ec/4f/e2/mandarin-carton-hotel.jpg?w=700&h=-1&s=1" },
  { id: 6, nombre: "Ramada", desc: "Hotel moderno con suites para estancias largas.", link: "https://www.wyndhamhotels.com/hotels/tlalnepantla-mexico?brand_id=RA", cat: "ESTANCIAS LARGAS", img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/hotelier-images/2c/9a/a2a95df0ba3beb09bbffa4f50d4dc1a8a9a20db03bd04a3762fd3f6d8889.jpeg" },
  { id: 7, nombre: "Parque Satélite", desc: "La mejor alternativa para negocios o placer.", link: "https://www.hotelparquesatelite.com/", cat: "VERSÁTIL", img: "https://media-cdn.tripadvisor.com/media/photo-s/04/09/d3/f8/parque-satelite.jpg" },
  { id: 8, nombre: "Krystal Satélite", desc: "Equilibrio perfecto entre descanso y negocios.", link: "https://www.krystalsatelitemariabarbara.com/", cat: "RELAX", img: "https://media-cdn.tripadvisor.com/media/photo-s/0c/74/5a/bf/krystal-satelite-maria.jpg" },
  { id: 9, nombre: "NH Valle Dorado", desc: "Hotel 4 estrellas con habitaciones contemporáneas.", link: "https://www.nhhotels.com/en/hotel/nhmexicocityvalledorado", cat: "PREMIUM", img: "https://media-cdn.tripadvisor.com/media/photo-s/2f/6e/da/95/facade.jpg" },
  { id: 10, nombre: "Hotel IBIS", desc: "Económico, dinámico y abierto a todo el mundo.", link: "https://all.accor.com/hotel/A6I0/index.en.shtml", cat: "ECONÓMICO", img: "https://www.ahstatic.com/photos/a0v4_ho_00_p_1024x768.jpg" }
];

function Hospedaje() {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const hotelesVisibles = showAll ? hoteles : hoteles.slice(0, 6);
  const revealClass = isVisible ? "reveal-hospedaje" : "";

  return (
    <section className="hospedaje-container-sc" id="hoteles" ref={sectionRef}>
      <div className={`sc-header ${revealClass} delay-1`}>
        <h2 className="sc-title">Dónde Descansar</h2>
        <div className={`sc-line ${isVisible ? "animate-sc-line" : ""}`}></div>
      </div>
      
      <div className="sc-grid">
        {hotelesVisibles.map((hotel, index) => (
          <div 
            key={hotel.id} 
            className={`sc-card ${revealClass}`}
            style={{ animationDelay: isVisible ? `${0.2 + (index * 0.1)}s` : '0s' }}
          >
            <div className="sc-img-wrapper">
              <img src={hotel.img} alt={hotel.nombre} />
              <span className="sc-badge">{hotel.cat}</span>
            </div>
            <div className="sc-content">
              <h3 className="sc-name">{hotel.nombre}</h3>
              <p className="sc-desc">{hotel.desc}</p>
              <div className="sc-footer">
                <a href={hotel.link} target="_blank" rel="noreferrer" className="sc-btn-web">RESERVAR</a>
                <a href={`https://www.google.com/maps/search/${hotel.nombre}+Tlalnepantla`} target="_blank" rel="noreferrer" className="sc-btn-map">VER MAPA</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={`view-more-container ${revealClass} delay-5`}>
        <button className="btn-view-more" onClick={() => setShowAll(!showAll)}>
          {showAll ? "MOSTRAR MENOS" : "VER TODAS LAS OPCIONES"}
        </button>
      </div>

      <div className={`map-section-sc ${revealClass} delay-5`}>
        <div className="map-text">
          <h3>Ubica tu estancia</h3>
          <p>Explora la ubicación estratégica de los mejores hoteles de la zona.</p>
        </div>
        <div className="map-frame-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30085.61907409252!2d-99.21557991562502!3d19.5393593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shoteles%20en%20tlalnepantla!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx" 
            width="100%"
            height="450"
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Mapa interactivo de Tlalnepantla">
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default Hospedaje;