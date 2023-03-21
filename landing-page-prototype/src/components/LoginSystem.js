import React, { useState, Dialog } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { emailSignIn, googleSignIn } from '../firebase/authentication';
import "../styles/LoginSystem.css";

function LoginSystem() {
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
        <div>
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
    )
}

export default LoginSystem;