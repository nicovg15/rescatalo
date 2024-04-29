import React from 'react'
import '../css/VideoDemo.css'

function VideoDemo() {

    return (
        <div id="video-demo" className='video-demo-main'>
            <div className='video-demo-title-wrapper'>
                <h1>Una manera simple</h1>
                <h1>de disfrutar y contribuir</h1>
            </div>
            <div className='video-demo-video-wrapper'>
                <iframe 
                    src="https://player.vimeo.com/video/940966914?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                    frameborder="0" 
                    allow="autoplay; picture-in-picture; clipboard-write" 
                    title="Rescatalo APP"
                    className='video-demo-iframe'
            >
                </iframe>
            </div>
            <script className='cc' src="https://player.vimeo.com/api/player.js"></script>
        </div>
    )
}

export default VideoDemo