import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import ToggleMode from './ToggleMode';
import '../styles/TopNavBar.css';

const TopNavBar = () => {
    return (
        <nav className='navbar-menu'>
            <ul className='navbar-nav'>
                <li className='navbar-home'>
                    <Link className='homeIcon' to="/"><AiOutlineHome /></Link>
                </li>
                <li className='thing'>
                    <BsGear />
                </li>
                <li className='navbar-gear'>
                    <Link className='settingsIcon' to="/settings"><BsGear /></Link>
                </li>
                <li className='navbar-toggle'>
                    <ToggleMode />
                </li>
            </ul>
        </nav>
    )
}

export default TopNavBar;