import React from 'react'
import TopNavBar from '../components/TopNavBar';
import ShapeContainer from '../components/ShapeContainer';
import '../styles/SettingsPage.css'
import { logout } from '../firebase/authentication';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase'
import { useEffect } from 'react';


function SettingsPage() {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth)

    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) {
            navigate("/wardrobe");
        }
    }, [user, loading, navigate]);

    const handleLogout = async () => {
        logout();
    }

    return (
        <div className='settings-test'>
            <TopNavBar />
            <ShapeContainer color=""/>
            <h1 className='setting-text'>Settings Page</h1>
            <button onClick={handleLogout}> Logout </button>
        </div>
    )
}

export default SettingsPage;