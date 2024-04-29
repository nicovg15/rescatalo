import React from 'react'
import '../../css/Home/HomeLeftButtons.css'

function HomeLeftButtons({ icon, platform }) {
 
    return (
        <div className='home-left-buttons-main'>
            {icon}
            <div className='home-left-buttons-text-wrapper'>
                <span>Disponible en</span>
                <span>{platform}</span>
            </div>
        </div>
    )
}

export default HomeLeftButtons