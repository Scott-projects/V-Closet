import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
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
    
    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            navigate("/wardrobe");
        }
    }, [user, loading, navigate]);

    const handleFlow = async () => {
        setEmail("");
        setPassword("");
        setError("")
        const result = await emailPasswordLogin(email, password);
        if (result.error) {
            if (authError) {
                alert(authError);
            }
            setError(result.error);
        }
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