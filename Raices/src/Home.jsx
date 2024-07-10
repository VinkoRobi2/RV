import React from 'react';
import NavBar from "./Componentes/NavBar";
import Bermuda from './assets/1.1.png';
import Tifway from './assets/tifway.png'
import GrassImage2 from './assets/grama.png'; // Agrega otra imagen
import Cesped from './Componentes/Cespeds';
import Imagenes from "./Componentes/Imagenes";
import Contacto from './Componentes/Contacto';
import Nosotros from "./Componentes/Nosotros";

const Home = () => {
  const texto1 = "Bermuda";
  const urlB = Bermuda;
  const texto3 = 'Tifway 419'
  const urlG3 = Tifway

  const texto2 = "Grass 2"; // Texto para el segundo césped
  const urlG2 = GrassImage2; // URL de la segunda imagen

  return (
    <div>
      <NavBar />
      <Imagenes />
      <Nosotros />
      <div className="cesped-wrapper">
      <Cesped texto={texto1} imagen={urlB} />
      <Cesped texto={texto2} imagen={urlG2} />
      <Cesped texto={texto3} imagen={urlG3} />
      </div>
      <Contacto/>
    </div>
  );
}

export default Home;
