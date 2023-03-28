import React from 'react';
import videobg2 from '../assets/video2.mp4'
import LoginSystem from '../components/LoginSystem';

function LoginPage() {
    return (
        <div className='login'>
            <div className='overlay'></div>
            <video className='formVideo' src={videobg2} autoPlay muted />
            <div className='formShape'>
                <h2 className='header-text'>Login</h2>
                    <LoginSystem />
            </div>
        </div>
    );
};

export default LoginPage;