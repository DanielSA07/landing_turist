import React, { useState } from 'react'; // Importamos useState
import './Hospedaje.css';

const hoteles = [
  { id: 1, nombre: "Crowne Plaza", desc: "Confort, negocios y excelente ubicación.", link: "https://www.ihg.com/crowneplaza/hotels/us/en/tlalnepantla/mexlm/hoteldetail", cat: "BUSINESS PREMIUM", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" },
  { id: 2, nombre: "Fiesta Inn", desc: "Moderno, funcional y con servicios accesibles.", link: "https://www.fiestamericanatravelty.com/fiesta-inn/hoteles/fiesta-inn-tlalnepantla", cat: "BUSINESS", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800" },
  { id: 3, nombre: "Real Inn Perinorte", desc: "Ideal para viajes familiares o de trabajo.", link: "https://www.grupocaminoreal.com/real-inn-perinorte", cat: "FAMILIAR", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800" },
  { id: 4, nombre: "City Express", desc: "Práctico, accesible y funcional.", link: "https://www.marriott.com/en-us/hotels/mexxb-city-express-ciudad-de-mexico-tlalnepantla/overview/", cat: "PRÁCTICO", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800" },
  { id: 5, nombre: "Mandarin Carton", desc: "Elegancia y atención personalizada de primer nivel.", link: "https://www.hotelmandarincarton.com.mx/", cat: "ELEGANTE", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800" },
  { id: 6, nombre: "Ramada", desc: "Hotel moderno con suites para estancias largas.", link: "https://www.wyndhamhotels.com/hotels/tlalnepantla-mexico?brand_id=RA", cat: "ESTANCIAS LARGAS", img: "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=800" },
  { id: 7, nombre: "Hotel Villajardín", desc: "Un espacio funcional para estancias cortas.", link: "https://hotelvillanueva.com.mx/hotel/hotel-villa-jardin/", cat: "FUNCIONAL", img: "https://images.unsplash.com/photo-1560200353-ce0a76b1d438?q=80&w=800" },
  // IMAGEN ACTUALIZADA AQUÍ ABAJO PARA PARQUE SATÉLITE
  { id: 8, nombre: "Parque Satélite", desc: "La mejor alternativa para negocios o placer.", link: "https://www.hotelparquesatelite.com/", cat: "VERSÁTIL", img: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=800" },
  { id: 9, nombre: "Krystal Satélite", desc: "Equilibrio perfecto entre descanso y negocios.", link: "https://www.krystalsatelitemariabarbara.com/", cat: "RELAX", img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=800" },
  { id: 10, nombre: "NH Valle Dorado", desc: "Hotel 4 estrellas con habitaciones contemporáneas.", link: "https://www.nhhotels.com/en/hotel/nhmexicocityvalledorado", cat: "PREMIUM", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800" },
  { id: 11, nombre: "Hotel IBIS", desc: "Económico, dinámico y abierto a todo el mundo.", link: "https://all.accor.com/hotel/A6I0/index.en.shtml", cat: "ECONÓMICO", img: "https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=800" }
];

function Hospedaje() {
  const [showAll, setShowAll] = useState(false);
  
  // Definimos cuántos mostrar al inicio (6 es un buen número para 2 filas en desktop)
  const hotelesVisibles = showAll ? hoteles : hoteles.slice(0, 6);

  return (
    <section className="hospedaje-container-sc" id="hoteles">
      <div className="sc-header">
        <h2 className="sc-title">Dónde Descansar</h2>
        <div className="sc-line"></div>
      </div>
      
      <div className="sc-grid">
        {hotelesVisibles.map(hotel => (
          <div key={hotel.id} className="sc-card">
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

      {/* Botón Ver Más / Ver Menos */}
      <div className="view-more-container">
        <button className="btn-view-more" onClick={() => setShowAll(!showAll)}>
          {showAll ? "MOSTRAR MENOS" : "VER TODAS LAS OPCIONES"}
        </button>
      </div>

      <div className="map-section-sc">
        <div className="map-text">
          <h3>Ubica tu estancia</h3>
          <p>Explora la ubicación estratégica de los mejores hoteles de la zona.</p>
        </div>
        <div className="map-frame-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30085.61907409252!2d-99.21557991562502!3d19.5393593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shoteles%20en%20tlalnepantla!5e0!3m2!1ses-419!2smx!4v1710000000000!5m2!1ses-419!2smx" 
            width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  );
}

export default Hospedaje;