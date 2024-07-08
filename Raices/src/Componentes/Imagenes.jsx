import React, { useState, useEffect } from 'react';
import imagen1 from '../assets/imagen1.png';
import imagen2 from '../assets/imagen2.png';
import '../styles/Imagenes.css'; 

const Imagenes = () => {
    const [imagenIndex, setImagenIndex] = useState(0);
    const [imagenVisible, setImagenVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setImagenIndex((prevIndex) => (prevIndex + 1) % 2);
            setImagenVisible(true); 
        }, 7000);

        return () => clearTimeout(timer);
    }, [imagenIndex]);

    const handleImgClick = () => {
        setImagenIndex((prevIndex) => (prevIndex + 1) % 2);
    };

    return (
        <div className="container">
            <div className="image-wrapper">
                <img
                    onClick={handleImgClick}
                    src={imagenIndex === 0 ? imagen1 : imagen2}
                    alt={`Imagen ${imagenIndex + 1}`}
                    className="true"
                    
                />
               <div className="text-overlay">
               {imagenIndex === 0 ? (
                        <p className='t1'>Transforma tu jardín con el césped más verde y vibrante.</p>
                    ) : (
                        <p>Disfruta de un oasis en casa con nuestro césped de alta calidad.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Imagenes;
