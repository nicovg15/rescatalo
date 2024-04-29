import React from 'react'
import '../../css/HowItWorks/HowItWorks.css'
import ItemBox from './ItemBox'
import '../../assets/images/icono-1.png'
function HowItWorks() {
  
    return (
        <div id="masplaneta" className='how-it-works-main'>
            <div className='how-it-works-title-wrapper'>
                <h1>Cuidar el planeta.</h1>
                <h1>Un rescate a la vez.</h1>
            </div>
            <div className='how-it-works-p-wrapper'>
                <p>Por año se desperdician 23 millones de camiones de 40 toneladas, suficiente para dar 7 vueltas a la Tierra. Disminuir el desperdicio de alimentos reduce las emisiones de gases de efecto invernadero y la velocidad de la destrucción de la naturaleza.</p>
            </div>
            <div className='how-it-works-items-wrapper'>
                <ItemBox image="1" title="MILLONES DE TONELADAS" desc="931 millones de toneladas de alimentos, o 17% del total de alimentos disponibles terminan en los basureros." />
                <ItemBox image="2" title="COMIDAS SIN CONSUMIR" desc="Los establecimientos de comidas minoristas desperdician hasta el 2% de sus alimentos." />
                <ItemBox image="3" title="EFECTO INVERNADERO" desc="Entre el 8% y 10% de las emisiones globales de gases de efecto invernadero son alimentos que no se consumen." />
            </div>
        </div>
    )
}

export default HowItWorks