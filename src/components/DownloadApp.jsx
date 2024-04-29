import React from 'react'
import '../css/DownloadApp.css'

function DownloadApp() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 62,
            behavior: 'smooth'
          });
        }
    };
  
    return (
        <div id="mascomidas" className='download-app-main'>
            <div className='download-app-left'>
                <img src={require('../assets/images/empleada.png')} alt="rescatalo download app" />
            </div>
            <div className='download-app-right'>
                <div className='download-app-right-title-wrapper'>
                    <h1>Aprovecha</h1>
                    <h1>el producto excedente</h1>
                </div>
                <p>¿Te han sobrado platos al final de la jornada? Descarga la App para registrar tu negocio y súmate a los miles de establecimientos que venden su excedente a clientes que buscan darle una segunda oportunidad a tu comida.</p>
                <button onClick={() => scrollToSection('video-demo')}>Como funciona</button>
            </div>
        </div>
    )
}

export default DownloadApp