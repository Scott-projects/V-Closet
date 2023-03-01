import React from 'react'
import videobg2 from '../assets/video2.mp4'
import '../styles/SignUpPage.css'

function SignUpPage() {
    return (
        <div className='signup'>
            <video className='formVideo' src={videobg2} autoPlay muted />

                <div className='formShape'>
                    Form Placeholder
                </div>

        </div>
    )
}

export default SignUpPage;