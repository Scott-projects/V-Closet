import React from 'react';
import { useState, Dialog } from 'react';
import ImageUploader from '../components/ImageUploader';
import TopNavBar from '../components/TopNavBar';
import '../styles/LoginPage.css';

function LoginPage() {
    return ( // TODO: ADD SIGN OUT
        <div className='login-test'>
            <h1 className='logintext'>Login Page (Test Page)</h1>
            <ImageUploader />
            <TopNavBar />
        </div>
    )
}

export default LoginPage;