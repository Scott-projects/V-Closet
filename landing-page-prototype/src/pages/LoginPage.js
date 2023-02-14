import React from 'react'
import ImageUploader from '../components/ImageUploader';
import TopNavBar from '../components/TopNavBar';
import '../styles/LoginPage.css'

function LoginPage() {

    return (

        <div className='login-test'>
            <div class="triangle-container">
                <div class="triangle"></div>
            </div>
            <TopNavBar />
            <h1 className='logintext'>Login Page (Test Page)</h1>
            {/* <ImageUploader /> */}
        </div>
    )
}

export default LoginPage;