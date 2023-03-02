import React from 'react';
import { useState } from 'react';
import videobg2 from '../assets/video2.mp4';
import '../styles/SignUpPage.css';
import TopNavBar from '../components/TopNavBar';
import { signUpwithEmailAndPassword } from '../firebase/authentication';

const SignUpPage =() => {
    //States for user input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    // Handles the user submit flow
    const handleFlow = async (expectedDefault) => {
        expectedDefault.preventDefault();
        if(password !== passwordCheck){
            setError("Both passwords must match! Please make sure you enter the same password.");
        } else {
            setEmail("");
            setPassword("");
            const result = await signUpwithEmailAndPassword(email, password);
            if(result.error){
                setError(result.error);
            }
        }
    };

    return (
        <>
            <div className='signup'>
                <div className='overlay'></div>
                <video className='formVideo' src={videobg2} autoPlay muted />
                <div className='formShape'>
                    <h2>Sign Up Now!</h2>
                    {error ? <div>{error}</div> : null}
                    <p>Please enter your username and password below:</p>
                    <form onSubmit={handleFlow}>
                        <input type="email" name="email" value={email} placeholder="yourEmail@provider.com" required onChange={(change) => setEmail(change.target.value)} />
                        <input type="password" name="password" value={password} placeholder="Your password" required onChange={(change) => setPassword(change.target.value)} />
                        <input type="password" name="passwordCheck" value={passwordCheck} placeholder="Re-enter your password" required onChange={(change) => setPasswordCheck(change.target.value)} />
                        <button type="submit">Submit</button>
                    </form>
                    <p>Are you already registred with us? TODO: IMPLEMENT ROUTER TO LOGIN!</p>
                </div>
            </div>
        </>
    );
};

export default SignUpPage;

