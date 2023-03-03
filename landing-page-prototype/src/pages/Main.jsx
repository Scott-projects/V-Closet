import React from 'react'
import videobg from '../assets/video1.mp4'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <body className='overflow'>
            <div className='main'>
                <div className="overlay"></div>
                <video className='landingVideo' src={videobg} autoPlay loop muted />
                <div className="content">
                    <h1>V-Closet</h1>
                    <p1>Virtualize your closet, elevate your drip.</p1>
                </div>
                <div className='button-container'>
                    <Link to="/login"><button className='button'>Login</button></Link>
                    <Link to="/signup"><button className='button'>Sign Up</button></Link>
                </div>
            </div>
        </body>
    )
}

export default Main;