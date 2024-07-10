import React, { useEffect } from 'react';
import imagen3 from '../assets/imagen3.png';
import '../styles/nosotros.css';

const Nosotros = () => {

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.animate');
            elements.forEach((element) => {
                const position = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (position < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='coontainer'>
            <h1 className='titulo animate'>Raices verdes</h1>
            <div className='contenido'>
                <p className='parrafo-con animate'>
                    Somos una empresa cordobesa especializada en la producción,<br/> comercialización y colocación de césped natural estilo alfombra.
                    <br /><span>Nos comprometemos</span> a ofrecer la mejor calidad y atención personalizada.
                    <br /><span>Contamos</span> con variedades de césped para todas las necesidades,<br/> incluyendo áreas de esparcimiento, campos deportivos y espacios públicos.
                    <br /><span>Respaldados</span> por tecnología de punta y garantía de calidad superior.
                </p>
                <img src={imagen3} alt="Imagen 3" className='imagen3 animate' />
            </div>
        </div>
    );
};

export default Nosotros;
