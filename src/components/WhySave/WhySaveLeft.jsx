import React from 'react'
import '../../css/WhySave/WhySaveLeft.css'

function WhySaveLeft() {
  
    return (
        <div className='why-save-left-main'>
            <div className='why-save-left-title-wrapper'>
                <h1>El gusto de</h1>
                <h1>colaborar y ahorrar</h1>
            </div>
            <p>Rescata comida deliciosa de establecimientos de tu zona por muy poco dinero. Compra tu Pack Sorpresa, come rico y ahorra, mientras cuidas el planeta.</p>
            <div className='why-left-items-wrapper'>
                <h4>TUS COMIDAS FAVORITAS</h4>
                <span>Rescata el excedente de comida de tus tiendas favoritas</span>
                <h4>AHORRA MÁS</h4>
                <span>Disfruta comida riquísima a un menor precio que el habitual</span>
                <h4>UN PLANETA MÁS SALUDABLE</h4>
                <span>Ayuda al planeta evitando que se desperdicie la comida</span>
            </div>
        </div>
    )
}

export default WhySaveLeft