import React from 'react'
import TopNavBar from '../components/TopNavBar';
import ShapeContainer from '../components/ShapeContainer';
import '../styles/SettingsPage.css'
import { logout } from '../firebase/authentication';
import { useNavigate } from 'react-router-dom';

function SettingsPage() {
    const navigate = useNavigate();
    const handleSignOut = async () => {
        try {
            logout();
            navigate("/");
        } catch (error) {
            alert("There was an error signing out: " + error);
        }
    }

    return (
        <div className='settings-test'>
            <TopNavBar />
            <ShapeContainer color=""/>
            <h1 className='setting-text'>Settings Page</h1>
            <button onClick={handleSignOut}>Logout</button>
        </div>
    )
}

export default SettingsPage;