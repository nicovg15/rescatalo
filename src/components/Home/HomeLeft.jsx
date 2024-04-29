import React from 'react'
import '../../css/Home/HomeLeft.css'
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import HomeLeftButtons from './HomeLeftButtons';

function HomeLeft() {

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
        <div className='home-left-wrapper'>
            <div className='home-left-title-wrapper'>
                <h1>Hay un pack de comida sorpresa</h1>
                <h1>esperando a ser rescatado.</h1>
            </div>
            <p>Elige entre cientos de tiendas, packs de comidas que se prepararon y están sin vender. Rescata el tuyo antes de que cierre el local. ¡Te lo llevamos en minutos!</p>
            <button onClick={() => scrollToSection('video-demo')} className='home-left-cta'>Como funciona</button>
            {/* <div className='home-left-buttons-wrapper'>
                <HomeLeftButtons icon={<AppleIcon className='home-left-buttons-icon' />} platform="App Store" />
                <HomeLeftButtons icon={<AndroidIcon className='home-left-buttons-icon' />} platform="Google Play" />
            </div> */}
        </div>
  )
}

export default HomeLeft