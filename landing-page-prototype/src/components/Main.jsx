import React from 'react'
import videobg from '../assets/video1.mp4'

const Main = () => {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={videobg} autoPlay loop muted />
            <div className="content">
                <h1>Welcome</h1>
                <p1>To V-Closet</p1>
            </div>
        </div>
    )
}

export default Main;