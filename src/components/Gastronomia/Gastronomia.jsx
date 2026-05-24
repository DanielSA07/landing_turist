import React, { useState, useEffect, useRef } from 'react';
import './Gastronomia.css';

const restaurantes = [
  { nombre: "El Ranchito de Yulay", desc: "Ambiente acogedor, servicio rápido y precios accesibles.", link: "https://www.facebook.com/ElRanchitoDeYulay/", cat: "Familiar" },
  { nombre: "Astroboy", desc: "El mejor sabor de la galaxia.", link: "https://bio.link/soyastroboy/", cat: "Familiar" },
  { nombre: "Asador Mestizo", desc: "Su cocina mexicana atrae a clientes a la búsqueda de algo distinto", link: "https://es.restaurantguru.com/El-Guiso-Mestizo-Tlalnepantla", cat: "Mexicana" },
  { nombre: "Las Arracheras y algo más...", desc: "¡Somos expertos en la parrilla!", link: "https://lasarracheras.com/", cat: "Cortes" },
  { nombre: "La Grange Churrascaría", desc: "La experiencia culinaria conocida como rodizio brasileño, es una danza de sabores que se desarrolla al ritmo de las brasas.", link: "https://lagrangechurrascaria.com/", cat: "Cortes" },
  { nombre: "Mol, Cocina Tradicional Mexicana", desc: "MOL es un tributo a la gastronomía mexicana por lo que disfrutarán de una experiencia culinaria llena de sabores, texturas y aromas mostrando el amor por México a través de nuestro amplio menú.", link: "https://molrestaurante.com/", cat: "Mexicana" },
  { nombre: "Casa Tinacal", desc: "Explora aquí el universo de la cocina mexicana.", link: "https://es.restaurantguru.com/Tinacal-Gustavo-Baz-Tlane-Tlalnepantla", cat: "Mexicana" },
  { nombre: "El Villano, Cocina de Brasa", desc: "Se distingue por su excepcional experiencia gastronómica.", link: "https://el-villano-cocina-de-brasa.goto-where.com/", cat: "Brasa" },
  { nombre: "CAÑA, Cocina de Mar", desc: "Mariscos frescos & cocina de autor. Sabor del Pacífico con alma mexicana", link: "https://www.instagram.com/cana.cocinademar/?hl=es-la", cat: "Mariscos" },
  { nombre: "Flama", desc: "Una experiencia que va más allá del sabor. Aquí, los ingredientes cuentan historias, el servicio fluye como un ritual, y cada visita es un momento que se queda contigo.", link: "https://culinariocoronado.com/flamarestaurante/", cat: "Familiar" },
  { nombre: "La Queretana", desc: "Todos nuestros platillos son del día presentados en tortilla hecha a mano.", link: "https://www.facebook.com/people/La-Queretana/100069537734853/?mibextid=wwXIfr&rdid=bqiRZVnB0gS5JKQi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18cWde6sEm%2F%3Fmibextid%3DwwXIfr", cat: "Mexicana" },
  { nombre: "Restaurante Bar Lino", desc: "Ven y disfruta con nosotros nuestros deliciosos platillos y de la mejor selección de bebidas que tenemos preparadas para ti.", link: "https://www.facebook.com/RestauranteBarLino?mibextid=wwXIfr&rdid=vuSm0DX06BnUZKV9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1arNMsKbsV%2F%3Fmibextid%3DwwXIfr#", cat: "Restaurante & Bar" },
  { nombre: "Las Memelas de la Rana", desc: "Disfruta en familia o amigos de las tradicionales Memelas de la Rana. También de los antojitos Mexicanos", link: "https://www.instagram.com/las_memelas/?hl=es", cat: "Mexicana" },
  { nombre: "Navia Café", desc: "Disfruta de Desayuno, Almuerzo, Brunch, Bebidas.", link: "https://www.facebook.com/share/1DyUSx9Spp/?mibextid=wwXIfr", cat: "Familiar" },
  { nombre: "Culinario Coronado", desc: "Cocina estacional elaborada con ingredientes de pequeños productores de diversas regiones de nuestro país ", link: "https://culinariocoronado.com/quienes-somos/#Artes%20culinario", cat: "Familiar" },
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