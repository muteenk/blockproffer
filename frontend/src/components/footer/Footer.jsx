import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/blockproffer-logo-cube-only.png'

function Footer() {
  return (
    <footer>
        <div className='footer-container'>
            <div className='footer-content'>
                <div className='footer-logo'>
                    <Link to="/">
                        <img src={logo} alt="Text-And-Cube-Logo" />
                        <h1>Block<span>Proffer</span></h1>
                    </Link>
                    <div className='para'>
                        <p>BlockProffer is a decentralized voting app that allows users to create polls and vote on them.</p>
                    </div>
                </div>
                <div className='footer-links'>
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-contact'>
                    <h3>Contact</h3>
                    <div className='footer-input'>
                        <input type="text" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button className='footer-submit-btn'>Send</button>
                    </div>
                </div>
                <div className='footer-social'>
                    <h3>Social</h3>
                    <ul>
                        <li>
                            <Link>
                            <i className="fa-brands fa-instagram"></i>
                            </Link>
                        </li>
                        <li>
                            <Link>
                            <i className="fa-brands fa-github"></i>
                            </Link>
                        </li>
                        <li>
                            <Link>
                            <i className="fa-brands fa-linkedin"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer