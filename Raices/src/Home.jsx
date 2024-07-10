import React from 'react';
import './styles/Inter.css'
import NavBar from "./Componentes/NavBar";
import Bermuda from './assets/1.1.png';
import Tifway from './assets/tifway.png'
import GrassImage2 from './assets/grama.png'; // Agrega otra imagen
import Cesped from './Componentes/Cespeds';
import Imagenes from "./Componentes/Imagenes";
import Contacto from './Componentes/Contacto';
import Nosotros from "./Componentes/Nosotros";
import Inter from './Componentes/InterWeb';

const Home = () => {
  const texto1 = "Bermuda";
  const urlB = Bermuda;
  const texto3 = 'Tifway 419'
  const urlG3 = Tifway

  const texto2 = "Grass 2"; 
  const urlG2 = GrassImage2; 

  return (
    <div>
      <NavBar />
      <Imagenes />
      <Nosotros />
      <Inter/>
      <h1 className='tit'>Tipos de Cesped</h1>
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
