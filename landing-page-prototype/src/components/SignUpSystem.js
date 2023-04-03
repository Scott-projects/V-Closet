import React from 'react';
import { signUpwithEmailAndPassword, googleSignIn } from '../firebase/authentication';
import { auth } from '../firebase/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';
import "../styles/SignUpSystem.css";

const SignUpSystem = () => {
    //States for user input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [user, loading, authError] = useAuthState(auth);
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            navigate("/home");
        }
    }, [user, loading, navigate]);

    // Handles the user submit flow
    const handleFlow = async (expectedDefault) => {
        expectedDefault.preventDefault();
        if (password !== passwordCheck) {
            setError("Both passwords must match! Please make sure you enter the same password.");
        } else {
            try {
                setLoading(true);
                await signUpwithEmailAndPassword(email, password);
                //navigate("/home");
            } catch (e) {
                if (authError) {
                    alert("There was an error with authentication: " + authError);
                }
                setError(e);
            }
            setTimeout(() => {
               setLoading(false); 
               console.log('setLoading to false (timeout)');
            }, 2000); //Wait 2 seconds

            setError("")
            setEmail("");
            setPassword("");
            setPasswordCheck("");
        }
    };

    return (
        <div className='signup'>
            {error ? <div>{error}</div> : null}
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
                <button type="submit" className="submitSignUp"  disabled={isLoading}>{isLoading ? <ImSpinner9 className='spin'/> : "Sign Up" }</button>
            </form>
            <div>
                <button onClick={googleSignIn} className="googleSignUp"><FaGoogle className='FaGoogle' /> Sign in with Google</button>
            </div>
            <p className='registerToLogin'>Already registered with us? <Link to="/login" className='linkToLogin'>Click Here</Link></p>
        </div>
    )
};

export default SignUpSystem;