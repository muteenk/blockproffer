import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Header from '../header/Header'

function Home() {
  return (
    <>
    <Header />
    <section className='home-section'>
      <div className='how-it-works'>
        <Link to="/howitworks">
          Learn <span className='how-it-works-color'>How it Works <i className="fas fa-arrow-right"></i></span>
        </Link>
      </div>
      <h1>Create Your Poll Today!</h1>
      <p>A Decentralized Voting App</p>
      <div className='create-btn'>
            <Link to="/createpolls">
                Create Poll
            </Link>
        </div>
        {/* <div className='scroll-down'>
          <p>Scroll Down</p>
          <a href="#">
            <i className="fas fa-arrow-down"></i>
          </a>
        </div> */}
    </section>
    </>
  )
}

export default Home