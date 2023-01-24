import React from 'react'
import HeaderWithBackButton from '../header/HeaderWithBackButton'
import './createpoll.css'
import FileUpload from '../fileUpload/FileUpload'



function Createpoll() {
  return (
    <section className='create-poll'>
      <HeaderWithBackButton />
      <form action="">
        <div className='poll-input'>
          <label>Poll Title</label>
          <input type="text" name="poll-title" placeholder='Poll Title' id="poll-title" />
        </div>
        <div className='poll-input'>
          <label>Poll Description</label>
          <textarea name="poll-desc"  id="poll-desc" cols="30" rows="10" placeholder='Poll Description'></textarea>
        </div>
        <p>Upload a CSV file to get the name of the eligible voters</p>
        <FileUpload/>
        <div className='check-box'>
          <input type="checkbox" id="" name="" value="" />
          <label>Allow Result Visibility to Voters</label>
        </div>
        <button className='submit-btn'>Submit</button>
      </form>
    </section>
  )
}

export default Createpoll