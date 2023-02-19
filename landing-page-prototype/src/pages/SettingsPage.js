import React from 'react'
import TopNavBar from '../components/TopNavBar';
import '../styles/SettingsPage.css'

function SettingsPage() {
    return (
        <div className='settings-test'>
            <div class="triangle-container">
                <div class="triangle"></div>
            </div>
            <TopNavBar />
            <h1 className='setting-text'>Settings Page</h1>
        </div>
    )
}

export default SettingsPage;