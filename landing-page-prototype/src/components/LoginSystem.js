import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { ImSpinner9 } from 'react-icons/im';
import { emailPasswordLogin, googleSignIn } from '../firebase/authentication';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase/firebase'
import "../styles/LoginSystem.css";

const LoginSystem = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
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

    const handleFlow = async (expectedDefault) => {
        expectedDefault.preventDefault();
        setError("");
        try {
            setLoading(true);
            await emailPasswordLogin(email, password);
        } catch (e) {
            if(authError){
                alert("There was an error with authentication: " + authError);
            }
            setError(e);
        }
        setTimeout(() => {
            setLoading(false); 
            console.log('setLoading to false (timeout)');
         }, 2000); //Wait 2 seconds
        setEmail("");
        setPassword("");
    };

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
                    <button type="submit" className="submitLogin" disabled={isLoading}>{isLoading ? <ImSpinner9 className='spin'/> : "Login" }</button>
                </form>
                <div>
                    <button onClick={googleSignIn} className="googleSignUp"><FaGoogle className='FaGoogle' /> Sign in with Google</button>
                </div>
                <p className='loginToRegister'>Not a Member? <Link to="/signup" className='linkToSignUp'>Click Here</Link></p>
        </div>
    )
}

export default LoginSystem;