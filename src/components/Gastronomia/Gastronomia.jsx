import React, { useState, useEffect, useRef } from 'react';
import './Gastronomia.css';

const restaurantes = [
  { nombre: "Restaurante El Bajío", desc: "Cocina mexicana tradicional con recetas caseras y sabor auténtico.", link: "https://elbajio.com.mx", cat: "Tradicional" },
  { nombre: "La Mansión Satélite", desc: "Especialistas en cortes de carne, ideal para comidas formales.", link: "https://lamansion.com.mx", cat: "Cortes" },
  { nombre: "Los Arcos", desc: "Mariscos frescos en un ambiente familiar y relajado.", link: "https://losarcosrestaurante.com", cat: "Mariscos" },
  { nombre: "Sonora Grill - Mundo e", desc: "Donde la tradición culinaria de Sonora Grill se fusiona con la pasión por la carne de primera calidad.", link: "https://sonoragrill.com.mx/sonora-grill-mundo-e/", cat: "Familiar" },
  { nombre: "Casa Ávila", desc: "Cocina contemporánea con influencia del Golfo y ambiente selecto.", link: "https://grupoavila.mx", cat: "Contemporánea" },
  { nombre: "El Villano", desc: "Fusión sonorense y chilanga con toque gourmet y mixología.", link: "https://el-villano-cocina-de-brasa.goto-where.com/", cat: "Fusión" },
  { nombre: "Cocina de Hacienda", desc: "Gastronomía mexicana auténtica con hospitalidad excepcional.", link: "https://cocinadehacienda.mx/", cat: "Hacienda" },
  { nombre: "El Rincón de los Morales", desc: "Desayunos y cenas con espacios ideales para reuniones.", link: "https://d795pv59rkpoi.cloudfront.net/index.html#hungry-top", cat: "Eventos" },
  { nombre: "Las Medulitas", desc: "Un lugar grandioso para disfrutar de maravillosa cocina mexicana.", link: "https://www.facebook.com/profile.php?id=100055656500519#", cat: "Regional" },
  { nombre: "El Bife del Padrino", desc: "Cortes a la parrilla y sabores que abrazan tu paladar.", link: "https://restaurantes.grupobifedelpadrino.com/menu-tlalnepantla/", cat: "Cortes" },
  { nombre: "Correo Mayor", desc: "Tradicional mezcla de comida mexicana, española e internacional.", link: "https://www.facebook.com/RestauranteCorreoMayor/", cat: "Internacional" },
  { nombre: "Chalet Suizo", desc: "Cocina fusion europea y mexicana con especialidades suizas.", link: "https://www.chaletsuizo.net/", cat: "Fusión Europea" },
  { nombre: "La Vid Argentina", desc: "Toda la experiencia de un auténtico restaurante argentino.", link: "https://www.lavidargentina.com/", cat: "Cortes" },
  { nombre: "Casa Lino", desc: "Deliciosos platillos y la mejor selección de bebidas.", link: "https://www.facebook.com/RestauranteBarLino/", cat: "Bar & Grill" },
  { nombre: "El Ranchito de Yulay", desc: "Ambiente acogedor, servicio rápido y precios accesibles.", link: "https://www.instagram.com/elranchitodeyulay/", cat: "Familiar" }
];

function Gastronomia() {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const visibles = showAll ? restaurantes : restaurantes.slice(0, 6);
  const revealClass = isVisible ? "reveal-gastro" : "";

  return (
    <section className="gastronomia-section" id="gastronomia" ref={sectionRef}>
      <div className="gastronomia-container">
        <div className={`gastronomia-header ${revealClass} delay-1`}>
          <span className="gastronomia-tag">EXPERIENCIA CULINARIA</span>
          <h2 className="gastronomia-title">Dónde comer</h2>
          <p className="gastronomia-intro">Tlalnepantla ofrece una gran variedad de opciones para todos los gustos.</p>
        </div>

        <div className="gastronomia-grid">
          {visibles.map((rest, index) => (
            <div 
              key={index} 
              className={`restaurante-card ${revealClass}`}
              style={{ animationDelay: isVisible ? `${0.2 + (index * 0.1)}s` : '0s' }}
            >
              <span className="rest-cat">{rest.cat}</span>
              <h3 className="rest-name">{rest.nombre}</h3>
              <p className="rest-desc">{rest.desc}</p>
              <a href={rest.link} target="_blank" rel="noreferrer" className="rest-link">
                VISITAR SITIO <span>→</span>
              </a>
            </div>
          ))}
        </div>

        <div className={`view-more-container-gastro ${revealClass} delay-5`}>
          <button className="btn-view-more-gastro" onClick={() => setShowAll(!showAll)}>
            {showAll ? "MOSTRAR MENOS" : "VER MÁS RESTAURANTES"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gastronomia;