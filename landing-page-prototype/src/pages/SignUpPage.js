import React from 'react';
import videobg2 from '../assets/video2.mp4';
import '../styles/SignUpPage.css';
import SignUpSystem from '../components/SignUpSystem';

function SignUpPage() {
    return (
        <div className='signup'>
            <div className='overlay'></div>
            <video className='formVideo' src={videobg2} autoPlay muted />
            <div className='formShape'>
                <h2 className='header-text'>CREATE ACCOUNT</h2>
                <SignUpSystem />
            </div>
        </div>
    );
};

export default SignUpPage;

