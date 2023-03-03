import React from 'react';
import { useState, Dialog } from 'react';
import TopNavBar from '../components/TopNavBar';
import videobg2 from '../assets/video2.mp4'
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
        if(result.error){
            setError(result.error);
        }
    }
    return (
        <div className='login'>
            <div className='overlay'></div>
            <video className='formVideo' src={videobg2} autoPlay muted/>
            <div className='formShape'>
                <h2>Sign in</h2>
                {error ? <div>{error}</div> : null}
                <form onSubmit={handleFlow}>
                    <input type="email" name="email" value={email} placeholder="yourEmail@provider.com" required onChange={(change) => setEmail(change.target.value)} />
                    <input type="password" name="password" value={password} placeholder="Your password" required onChange={(change) => setPassword(change.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <button onClick={googleSignIn}>Sign in with google</button>
            </div>
        </div>
    )
}

export default LoginPage;