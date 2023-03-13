import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import { GiClothes } from 'react-icons/gi';
import ToggleMode from './ToggleMode';
import '../styles/TopNavBar.css';

const TopNavBar = () => {
    return (
        <nav className='navbar-menu'>
            <ul className='navbar-nav'>
                <li className='navbar-home'>
                    <Link className='homeIcon' to="/home"><AiOutlineHome /></Link>
                </li>
                <li className='navbar-gear'>
                    <Link className='settingsIcon' to="/settings"><BsGear /></Link>
                </li>
                <li className='navbar-toggle'>
                    <ToggleMode />
                </li>
                <li className='navbar-clothes'>
                    <Link className='clothesIcon' to="/wardrobe"><GiClothes /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default TopNavBar;