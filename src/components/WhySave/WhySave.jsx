import React from 'react'
import '../../css/WhySave/WhySave.css'
import WhySaveLeft from './WhySaveLeft'

function WhySave() {
  
    return (
        <div id="masahorro" className='why-save-main'>
            <WhySaveLeft />
            <div className='why-save-right'>
                <img src={require('../../assets/images/pareja.png')} alt="rescatalo porque utilizarlo" />
            </div>
        </div>
    )
}

export default WhySave