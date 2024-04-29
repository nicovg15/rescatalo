import React from 'react'
import '../../css/Home/Home.css'
import HomeLeft from './HomeLeft'

function Home() {
  
    return (
        <div id="inicio" className='home-main'>
            <HomeLeft />
            <div className='home-right-wrapper'>
                <img src={require('../../assets/images/smartp.png')} alt="rescatalo app" />
            </div>
        </div>
  )
}

export default Home