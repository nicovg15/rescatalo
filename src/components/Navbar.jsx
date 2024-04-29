import React from 'react'
import '../css/Navbar.css'

function Navbar() {

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
    <div className='navbar-main'>
      <img src={require('../assets/images/logooo.jpg')} alt="rescatalo logo" />
      <div className='navbar-items-wrapper'>
        <span onClick={() => scrollToSection('inicio')}>Inicio</span>
        <span onClick={() => scrollToSection('masplaneta')}>Más Planeta</span>
        <span onClick={() => scrollToSection('masahorro')}>Más Ahorro</span>
        <span onClick={() => scrollToSection('mascomidas')}>Más Rescates</span>
      </div>
      <button onClick={() => scrollToSection('video-demo')} className='navbar-cta'>Como funciona</button>
    </div>
  )
}

export default Navbar