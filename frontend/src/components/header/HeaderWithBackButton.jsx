import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/blockproffer-logo.png'
import '../../App.css'



function HeaderWithBackButton()
{
    return (
        <nav>
            <div className='logo'>
                <NavLink to="/">
                    <img src={logo} alt="Text-And-Cube-Logo" />
                </NavLink>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>
                        <NavLink to="/">
                            <span className='arrow'><i className='fas fa-arrow-left'></i></span> Back to Home
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default HeaderWithBackButton