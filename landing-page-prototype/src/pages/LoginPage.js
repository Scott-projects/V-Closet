import React from 'react';
import { useState, Dialog } from 'react';
import TopNavBar from '../components/TopNavBar';
import videobg2 from '../assets/video2.mp4'
import '../styles/LoginPage.css';

function LoginPage() {
    return (
        <div className='login'>
            <div className='overlay'></div>
            <video className='formVideo' src={videobg2} autoPlay muted/>
            <div className='formShape'>Login Placeholder</div>
        </div>
    )
}

export default LoginPage;