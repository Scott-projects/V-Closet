import React from 'react'
import TopNavBar from '../components/TopNavBar';
import '../styles/SignUpPage.css'

function SignUpPage() {
    return (
        <div className='signup-test'>
            <div class="triangle-container">
                <div class="triangle"></div>
            </div>
            <TopNavBar />
            <h1 className='signup-text'>Sign Up Page</h1>
        </div>
    )
}

export default SignUpPage;