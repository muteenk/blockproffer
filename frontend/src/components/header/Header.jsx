import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/blockproffer-logo.png'
import '../../App.css'

function Header() {
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
                    <NavLink to="/livepolls" style={({ isActive }) => ({color: isActive ? '#fbc000' : '#050005'})}>
                        Live Polls
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" style={({ isActive }) => ({color: isActive ? '#fbc000' : '#050005'})}>
                        Contact Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={({ isActive }) => ({color: isActive ? '#fbc000' : '#050005'})}>
                        About Us
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className='create-btn'>
            <NavLink to="/createpolls">
                Create Poll
            </NavLink>
        </div>
    </nav>
  )
}

export default Header