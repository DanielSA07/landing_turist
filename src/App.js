import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import GridAtractivos from './components/GridAtractivos/GridAtractivos';
import SectionCards from './components/SectionCards/SectionCards';
import Welcome from './components/Welcome/Welcome';
import Gastronomia from './components/Gastronomia/Gastronomia';
import './App.css';
import Hospedaje from './components/Hospedaje/Hospedaje';
import ComoLlegar from './components/ComoLlegar/ComoLlegar';


const hoteles = [
  { id: 1, nombre: "City Express Tlalnepantla", direccion: "Av. Mario Colín 10", imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800", categoria: "BUSINESS" },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Welcome />
      <GridAtractivos />
      <Gastronomia />
      <Hospedaje />
      <ComoLlegar/>
    </div>
  );
}

export default App;