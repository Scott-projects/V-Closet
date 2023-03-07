import React from 'react';
import { Link } from 'react-router-dom';
import { useState, Dialog } from 'react';
import videobg2 from '../assets/video2.mp4'
import { FaGoogle } from 'react-icons/fa';
import '../styles/LoginPage.css';
import { emailSignIn, googleSignIn } from '../firebase/authentication';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleFlow = async () => {
        setEmail("");
        setPassword("");
        const result = await googleSignIn();
        if (result.error) {
            setError(result.error);
        }
    }
    return (
        <div className='login'>
            <div className='overlay'></div>
            <video className='formVideo' src={videobg2} autoPlay muted />
            <div className='formShape'>
                <h2 className='header-text'>Login</h2>
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
                    <button type="submit" className="submitLogin">Login</button>
                </form>
                <div>
                    <button onClick={googleSignIn} className="googleSignUp"><FaGoogle className='FaGoogle' /> Sign in with Google</button>
                </div>
                <p className='loginToRegister'>Not a Member? <Link to="/signup" className='linkToSignUp'>Click Here</Link></p>
            </div>
        </div>
    )
}

export default LoginPage;