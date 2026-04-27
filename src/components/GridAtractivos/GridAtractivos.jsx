import React, { useState, useEffect, useRef } from 'react';
import './GridAtractivos.css';

const dataAtractivos = {
  // ... (tus datos se mantienen igual)
  queHacer: [
    { id: 1, nombre: "Catedral de Corpus Christi", desc: "Ícono histórico y arquitectónico del municipio.", cat: "CULTURA", img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Catedral_de_Corpus_Christi.JPG" },
    { id: 2, nombre: "Plaza Gustavo Baz", desc: "Corazón social de Tlalnepantla, ideal para un paseo local.", cat: "PLAZA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUptNS__CwFYkedX9VZ5y3mHevgALb0B7Iyg&s" },
    { id: 3, nombre: "Centro Histórico", desc: "Explora las raíces y tradiciones de la Tierra de Enmedio.", cat: "HISTORIA", img: "https://files.diarioportal.com/diarioportal/images/2021/10/Tlalnepantla.png" },
    { id: 4, nombre: "Parque Tezozómoc", desc: "Un pulmón verde cercano para conectar con la naturaleza.", cat: "NATURALEZA", img: "https://cdn-3.expansion.mx/dims4/default/6136162/2147483647/strip/true/crop/659x462+0+0/resize/1200x841!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F2b%2F2bc82c27ab89fff91c8f01c514f816fc%2Ftezozmoc20180817124745.jpg" },
  ],
  compras: [
    { id: 5, nombre: "Mundo E", desc: "Entretenimiento y compras de nivel internacional.", link: "https://mundoe.com.mx/", cat: "MALL", img: "https://mundoe.com.mx/wp-content/uploads/2025/07/2-scaled.png" },
    { id: 6, nombre: "Plaza Tlalne Fashion Mall", desc: "Moda y las mejores marcas en un solo lugar.", link: "https://plazatlalne.com/", cat: "FASHION", img: "https://realestatemarket.com.mx/images/articles/104-usos-mixtos/01-fulltext/098-tlalne.jpg" },
    { id: 7, nombre: "Sentura Tlalnepantla", desc: "Espacios contemporáneos para un día de shopping.", link: "https://senturatlalnepantla.mx/", cat: "MODERNO", img: "https://static.wixstatic.com/media/1a5b02_10b8c078da9546a9a6e69eca4f4f511d~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_1092,h_728,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1a5b02_10b8c078da9546a9a6e69eca4f4f511d~mv2_d_6000_4000_s_4_2.jpg" },
    { id: 8, nombre: "Multi Plaza Valle Dorado", desc: "Variedad y conveniencia en la zona norte.", link: "https://www.multiplaza.com.mx/multiplaza-valle-dorado/", cat: "CONVENIENCIA", img: "https://assets.easybroker.com/property_images/3916552/64448253/EB-OA6552.jpg?version=1690846534" },
  ],
  consientete: [
    { id: 9, nombre: "Sports World Plaza Tlalne", desc: "Instalaciones premium para tu entrenamiento.", link: "https://www.sportsworld.com.mx/", cat: "GYM", img: "https://cdn-3.expansion.mx/a1/b5/0c64d8ef494d950594f424a74c1d/sport-world-2.jpg" },
    { id: 10, nombre: "Planet Fitness", desc: "Ambiente libre de críticas para ejercitarte.", link: "https://www.planetfitness.com.mx/", cat: "GYM", img: "https://imagedelivery.net/0zkupOUuC3Y057B0r11ExQ/2a711240-56cb-45c4-3cf2-26ef00bf7a00/width=720" },
    { id: 11, nombre: "Fit24 Jinetes", desc: "Entrenamiento 24/7 cerca de ti.", link: "http://google.com/maps?q=Fit24+Jinetes", cat: "GYM", img: "https://images.totalpass.com/public/1280x720/czM6Ly90cC1pbWFnZS1hZG1pbi1wcm9kL2d5bXMvbGxkc3BzejFpcWVwMGFveGltODljdTJkdm51dWczcG14M3VwMG90bm8xZ24weWdwN2ozNWR1Njk3NXNr" },
    { id: 12, nombre: "World Fitness Gym", desc: "Fuerza y disciplina en Tlalnepantla.", link: "http://google.com/maps?q=World+Fitness+Gym+Tlalnepantla", cat: "GYM", img: "https://cdns3.fitfit.fitness/mx/media/items/originals/3808-World-Gym-Cumbres-Z7WI2.jpg" },
    { id: 13, nombre: "American Fitness Center", desc: "Calidad y comunidad deportiva.", link: "http://google.com/maps?q=American+Fitness+Center+Tlalnepantla", cat: "GYM", img: "https://assets-cdn.wellhub.com/images/?su=https://images.partners.gympass.com/image/filename/4617078/lg_uiy3N09jr_Ty_PSKw_jd2q7ICYJVIRU2.png" },
    { id: 14, nombre: "Sport Gym Universe", desc: "Variedad de equipo y ambiente motivador.", link: "http://google.com/maps?q=Sport+Gym+Universe+Tlalnepantla", cat: "GYM", img: "https://sportfitnessgym.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-03-11-at-10.55.13-PM-2-scaled-r2yfhaswzy3yftb8u02srrcqmevigikp839pg72nts.jpeg" },
    { id: 15, nombre: "BODY ELEMENT GYM", desc: "Tu estilo de vida fitness en un solo lugar.", link: "http://google.com/maps?q=Body+Element+Gym+Tlalnepantla", cat: "GYM", img: "https://images.fresha.com/lead-images/placeholders/gym-and-fitness-28.jpg?class=venue-gallery-mobile" },
    { id: 16, nombre: "D’ Gym Fitness Center", desc: "Atención personalizada y equipo moderno.", link: "http://google.com/maps?q=D+Gym+Fitness+Tlalnepantla", cat: "GYM", img: "https://i.pinimg.com/736x/6f/58/8a/6f588aeb577af07235886489c0e2dc78.jpg" },
    { id: 17, nombre: "Gimnasio Bucaneros", desc: "Tradición y fuerza en la zona.", link: "http://google.com/maps?q=Gimnasio+Bucaneros+Tlalnepantla", cat: "GYM", img: "https://media-cdn.tripadvisor.com/media/photo-s/0f/bd/ea/7b/fitness-center.jpg" },
    { id: 18, nombre: "The North Fitness", desc: "Entrenamiento funcional de alta intensidad.", link: "http://google.com/maps?q=The+North+Fitness+Tlalnepantla", cat: "GYM", img: "https://images.totalpass.com/public/1280x720/czM6Ly90cC1pbWFnZS1hZG1pbi1wcm9kL2d5bXMvamVxc3pxY2M1OTN3aXYxbzh4d2pidmkzM2lyMDZ5cHU2ZTlncHRoazB1dG92MXNtMGp6NmJxenJyc3o0" },
    { id: 19, nombre: "Gym Monster", desc: "Saca el máximo provecho a tu rutina.", link: "http://google.com/maps?q=Gym+Monster+Tlalnepantla", cat: "GYM", img: "https://assets-cdn.wellhub.com/images/?su=https://images.partners.gympass.com/image/filename/5483893/lg_bjpxyvC1sQhykVsFc7h10PtH0IUqFjgc.jpg" },
    { id: 20, nombre: "FW Fitness", desc: "Espacio moderno para tu bienestar físico.", link: "http://google.com/maps?q=FW+Fitness+Tlalnepantla", cat: "GYM", img: "https://cdns3.fitfit.fitness/mx/media/items/originals/18454-Garage-Gym-RG14L.jpg" },
    { id: 21, nombre: "Garage Fitness Mx", desc: "Entrenamiento dinámico y comunidad activa.", link: "http://google.com/maps?q=Garage+Fitness+Tlalnepantla", cat: "GYM", img: "https://i.pinimg.com/236x/6f/3d/84/6f3d84079260fb3e73b79b89eca2a8e7.jpg" }
  ]
};

function GridAtractivos() {
  const [activeTab, setActiveTab] = useState('queHacer');
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px" // Dispara la animación un poco antes de llegar
      }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowMore(false);
  };

  const currentData = dataAtractivos[activeTab];
  const displayData = showMore ? currentData : currentData.slice(0, 6);
  const revealClass = isVisible ? "reveal-atractivos" : "";

  return (
    <section className="atractivos-section" id="atractivos" ref={containerRef}>
      <div className="atractivos-container">
        <div className={`tabs-header ${revealClass} delay-1`}>
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
          {displayData.map((item, index) => (
            <div 
              key={item.id} 
              className={`sc-card ${revealClass}`}
              style={{ animationDelay: isVisible ? `${0.2 + (index * 0.1)}s` : '0s' }}
            >
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
          <div className={`view-more-container-atractivos ${revealClass} delay-5`}>
            <button className="btn-view-more-atractivos" onClick={() => setShowMore(!showMore)}>
              {showMore ? "MOSTRAR MENOS" : "VER TODAS LAS OPCIONES"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default GridAtractivos;