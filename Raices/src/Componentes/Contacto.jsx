import React from 'react';
import '../styles/Contacto.css'; // Asegúrate de crear y utilizar este archivo CSS

const Contacto = () => {
    return (
        <div className="contacto-container-outer">
            <div className="contacto-container">
                <h1 className="contacto-title">CONTACTO</h1>
                <div className="contacto-info">
                    <div className="contacto-item">
                        <span className="contacto-icon">💬</span>
                        <span>+54 9 3512 11-4747</span>
                    </div>
                    <div className="contacto-item">
                        <span className="contacto-icon">✉️</span>
                        <span>contacto@campoverdecesped.com</span>
                    </div>
                </div>
                <form className="contacto-form">
                    <input type="text" placeholder="Nombre *" className="contacto-input" required />
                    <input type="email" placeholder="Email *" className="contacto-input" required />
                    <input type="text" placeholder="Asunto" className="contacto-input" />
                    <textarea placeholder="Mensaje" className="contacto-textarea"></textarea>
                    <button type="submit" className="contacto-button">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contacto;
