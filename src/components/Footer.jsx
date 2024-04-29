import React, { useContext } from 'react'
import '../css/Footer.css'
import { stateContext } from './context/context';
import HomeLeftButtons from './Home/HomeLeftButtons'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

function Footer() {
    const { setContactPopUp } = useContext(stateContext)

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
        <div className='footer-main'>
            <img src={require('../assets/images/logo-blanco.png')} alt="rescatalo logo" />
            <div className='footer-items-wrapper'>
                <span onClick={() => scrollToSection('inicio')}>Inicio</span>
                <span onClick={() => scrollToSection('masplaneta')}>Más Planeta</span>
                <span onClick={() => scrollToSection('masahorro')}>Más Ahorro</span>
                <span onClick={() => scrollToSection('mascomidas')}>Más Comidas</span>
                <span onClick={() => setContactPopUp(true)}>Contacto</span>
            </div>
            <div className='footer-items-wrapper'>
                <span>Privacidad</span>
                <span>Cookies</span>
                <span>Términos y Condiciones</span>
            </div>
            <div className='home-left-buttons-wrapper'>
                {/* <HomeLeftButtons icon={<AppleIcon className='home-left-buttons-icon' />} platform="App Store" /> */}
                {/* <HomeLeftButtons icon={<AndroidIcon className='home-left-buttons-icon' />} platform="Google Play" /> */}
            </div>
        </div>
  )
}

export default Footer