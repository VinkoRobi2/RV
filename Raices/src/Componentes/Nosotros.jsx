import React from 'react';
import imagen3 from '../assets/imagen3.png';
import '../styles/nosotros.css';

const Nosotros = () => {
    return (
        <div className='coontainer'>
            <h1 className='titulo'>Raices verdes</h1>
            <p className='parrafo-con'>
                Somos una empresa cordobesa especializada en la producción,<br/> comercialización y colocación de césped natural estilo alfombra.
                <br /><span>Nos comprometemos</span> a ofrecer la mejor calidad y atención personalizada.
                <br /><span>Contamos</span> con variedades de césped para todas las necesidades,<br/> incluyendo áreas de esparcimiento, campos deportivos y espacios públicos.
                <br /><span>Respaldados</span> por tecnología de punta y garantía de calidad superior.
            </p>
            
        </div>
    );
};

export default Nosotros;
