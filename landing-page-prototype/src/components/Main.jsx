import React from 'react'
import videobg from '../assets/video1.mp4'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div className='main'>
            <div className="overlay"></div>
            <video src={videobg} autoPlay loop muted />
            <div className="content">
                <h1>V-Closet</h1>
                <p1>Virtualize your closet, elevate your drip.</p1>
            </div>
            <div className='buttons'>
                <Link to="/login"><button className='login'>Login</button></Link>
                <Link to="/signup"><button className='sign-up'>Sign Up</button></Link>
            </div>
        </div>
    )
}

export default Main;