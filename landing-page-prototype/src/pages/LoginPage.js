import React from 'react'
import ImageUploader from '../components/ImageUploader';
import ToggleMode from '../components/ToggleMode';
import TopNavBar from '../components/TopNavBar';
import '../styles/LoginPage.css'

function LoginPage() {
    const REDIRECT_ON_SIGNIN = '/wardrobe';
    const uiConfig = {
        signInFlow: 'popup', 
        signInSuccessful: REDIRECT_ON_SIGNIN,
        signInOptions: [
            EmailAuthProvider.PROVIDE_ID,
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
            <Dialog> 
                <StyledFirebaseAuth uiConfig={uiConfig} StyledFirebaseAuth={auth} />
            </Dialog>
        </div>
    )
}

export default LoginPage;