import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import videobg2 from '../assets/video2.mp4';
import { FaGoogle } from 'react-icons/fa';
import '../styles/SignUpPage.css';
import { signUpwithEmailAndPassword, googleSignIn } from '../firebase/authentication';
import { auth } from '../firebase/firebase';
import { useAuthState } from "react-firebase-hooks/auth";


const SignUpPage = () => {
    //States for user input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [user, loading, authError] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(loading) {
            return;
        }
        if(user){
            navigate("/wardrobe");
        }
    }, [user, loading, navigate]);

    // Handles the user submit flow
    const handleFlow = async (expectedDefault) => {
        expectedDefault.preventDefault();
        if (password !== passwordCheck) {
            setError("Both passwords must match! Please make sure you enter the same password.");
        } else {
            setError("")
            setEmail("");
            setPassword("");
            setPasswordCheck("");
            const result = await signUpwithEmailAndPassword(email, password);
            if (result.error) {
                setError(result.error);
            }
            else {
               navigate("/wardrobe");
            }
        }
    };
    
    return (
        <>
            <div className='signup'>
                <div className='overlay'></div>
                <video className='formVideo' src={videobg2} autoPlay muted />
                <div className='formShape'>
                    <h2 className='header-text'>CREATE ACCOUNT</h2>
                    {error ? <div>{error}</div> : null}
                    {authError ? <div>{authError}</div> : null}
                    <form onSubmit={handleFlow}>
                        <div className='form-group'>
                            <label for="emailLabel">Email</label>
                            <input type="email" name="email" value={email} placeholder="yourEmail@provider.com" required onChange={(change) => setEmail(change.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label for="passwordLabel">Password</label>
                            <input type="password" name="password" value={password} placeholder="Your password" required onChange={(change) => setPassword(change.target.value)} />
                        </div>

                        <div className='form-group'>
                            <label for="passwordCheckLabel">Re-enter Password</label>
                            <input type="password" name="passwordCheck" value={passwordCheck} placeholder="Re-enter your password" required onChange={(change) => setPasswordCheck(change.target.value)} />
                        </div>
                        <button type="submit" className="submitSignUp">Sign Up</button>
                    </form>
                    <div>
                        <button onClick={googleSignIn} className="googleSignUp"><FaGoogle className='FaGoogle' /> Sign in with Google</button>
                    </div>
                    <p className='registerToLogin'>Already registered with us? <Link to="/login" className='linkToLogin'>Click Here</Link></p>
                </div>
            </div>

        </>
    );
};

export default SignUpPage;

