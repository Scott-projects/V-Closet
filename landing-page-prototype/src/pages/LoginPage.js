import React from 'react'
import ToggleMode from '../components/ToggleMode';
import ImageUploader from '../components/ImageUploader';
import './LoginPage.css'

function LoginPage() {

    return (
        <div className='login-test'>
            <h1>Login Page (Test Page)</h1>
            <ImageUploader />
            <ToggleMode />
        </div>
    )
}

export default LoginPage;