import React from 'react';
import { useState, Dialog } from 'react';
import ImageUploader from '../components/ImageUploader';
import ToggleMode from '../components/ToggleMode';
import TopNavBar from '../components/TopNavBar';
import '../styles/LoginPage.css';

function LoginPage() {

    return ( // TODO: ADD SIGN OUT
        <div className='login-test'>
            <div class="triangle-container">
                <div class="triangle"></div>
            </div>
            <h1>Login Page (Test Page)</h1>
            <ImageUploader />
            <ToggleMode />
        </div>
    )
}

export default LoginPage;