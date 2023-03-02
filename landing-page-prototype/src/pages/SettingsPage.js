import React from 'react'
import TopNavBar from '../components/TopNavBar';
import ShapeContainer from '../components/ShapeContainer';
import '../styles/SettingsPage.css'

function SettingsPage() {
    return (
        <div className='settings-test'>
            <TopNavBar />
            <ShapeContainer color=""/>
            <h1 className='setting-text'>Settings Page</h1>
        </div>
    )
}

export default SettingsPage;