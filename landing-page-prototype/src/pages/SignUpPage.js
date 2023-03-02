import React from 'react'
import videobg2 from '../assets/video2.mp4'
import '../styles/SignUpPage.css'

function SignUpPage() {
    return (
        <div className='signup'>
            <div className='overlay'></div>
            <video className='formVideo' src={videobg2} autoPlay muted />

                <div className='formShape'>
                    Sign Up Placeholder
                </div>

        </div>
    )
}

export default SignUpPage;