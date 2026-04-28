import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import GridAtractivos from './components/GridAtractivos/GridAtractivos';
import Welcome from './components/Welcome/Welcome';
import Gastronomia from './components/Gastronomia/Gastronomia';
import './App.css';
import Hospedaje from './components/Hospedaje/Hospedaje';
import ComoLlegar from './components/ComoLlegar/ComoLlegar';

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