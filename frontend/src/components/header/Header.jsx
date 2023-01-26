import React, {useState} from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/blockproffer-logo.png'
import '../../App.css'

function Header() {

    const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
    const [menu_class, setMenuClass] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked)
        {
            setBurgerClass('burger-menu clicked')
            setMenuClass('menu visible')
        }
        else
        {
            setBurgerClass('burger-menu unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }
  return (
    <>
    <nav>
        <div className='burger-menu' onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
        </div>
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
    <div className={menu_class}></div>
    </>
  )
}

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
                        Home
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header