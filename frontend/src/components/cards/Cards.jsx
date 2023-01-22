import React from 'react'
import './card.css'



function Cards() {
    return (
    <div className='card-display'>
        <h1>Live Polls</h1>
        <div className='cards'>
            <div className='card'>
                <div className='card-header'>
                    <h2>Company Name 1</h2>
                </div>
                <div className='card-body'>
                    <p>ID : 10XXXXXXXXX39802</p>
                </div>
                <div className='card-footer'>

                </div>
            </div>
            <div className='card'>
                <div className='card-header'>
                    <h2>Company Name 2</h2>
                </div>
                <div className='card-body'>
                <p>ID : 10XXXXXXXXX39802</p>
                </div>
                <div className='card-footer'>

                </div>
            </div>
            <div className='card'>
                <div className='card-header'>
                    <h2>Company Name 3</h2>
                </div>
                <div className='card-body'>
                    <p>ID : 10XXXXXXXXX39802</p>
                </div>
                <div className='card-footer'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards