import React from 'react'
import { NavLink } from 'react-router-dom'
import './pnf.css'

function PNF() {
  return (
    <div className='error404'>
      <h1>404 Page Not Found</h1>
      <NavLink to="/">
        <div className='btn'>
          <i className='fas fa-arrow-left'></i> Back to Home
        </div>
      </NavLink>
    </div>
  )
}

export default PNF