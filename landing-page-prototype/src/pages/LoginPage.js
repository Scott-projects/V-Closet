import React from 'react';
import { useState, Dialog } from 'react';
import ImageUploader from '../components/ImageUploader';
import ToggleMode from '../components/ToggleMode';
import TopNavBar from '../components/TopNavBar';
import '../styles/LoginPage.css';
import { auth } from '../firebase/firebase';
import { StyledFirebaseAuth } from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/auth';

function LoginPage() {

    const [login, setLoginState] = useState(false);
    const REDIRECT_ON_SIGNIN = '/wardrobe';

    const uiConfig = {
        signInFlow: 'popup', 
        signInSuccessful: REDIRECT_ON_SIGNIN,
        signInOptions: [
            EmailAuthProvider.PROVIDER_ID,
            GoogleAuthProvider.PROVIDER_ID,
        ],
    };

    return ( // TODO IMPLEMENT LOGIN STATE FOR DIALOG
        <div className='login-test'>
            <div class="triangle-container">
                <div class="triangle"></div>
            </div>
            <h1>Login Page (Test Page)</h1>
            <ImageUploader />
            <ToggleMode />
            <button onClick={() => setLoginState(true)}>Login</button>
            
        </div>
    )
}

export default LoginPage;