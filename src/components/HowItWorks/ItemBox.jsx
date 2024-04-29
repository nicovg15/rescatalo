import React from 'react'
import '../../css/HowItWorks/ItemBox.css'

function ItemBox({ image, title, desc }) {
  
    return (
        <div className='item-box-main'>
            <img src={require(`../../assets/images/icono-${image}.png`)} alt="rescatalo como funciona" />
            <h4>{title}</h4>
            <span>{desc}</span>
        </div>
    )
}

export default ItemBox