import React, { useState } from 'react';
import HeaderWithBackButton from '../header/HeaderWithBackButton'
import './createpoll.css'
import FileUpload from '../fileUpload/FileUpload'
import OptionGenerator from '../optionGenerator/OptionGenerator';
import Datetime from 'react-datetime';






function Createpoll() {

  // Hooks for handling form data
  const [pollTitle, setPollTitle] = useState('');
  const [pollDesc, setPollDesc] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);



  // Function to handle form data
  const handleInputs = (e) => {
    setPollTitle(e.target.value);
  }

  const handleVisibility = (e) => {
    if (visibility === true) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  }


  const onFormSubmit = (e) => {
    e.preventDefault();


  }


  return (
    <section className='create-poll'>
      <HeaderWithBackButton />
      <form onSubmit={onFormSubmit}>
        <div className='poll-input'>
          <label>Poll Title</label>
          <input type="text" name="poll-title" placeholder='Poll Title' id="poll-title" onChange={handleInputs} value={pollTitle} required/>
        </div>
        <div className='poll-input'>
          <label>Poll Description</label>
          <textarea name="poll-desc"  id="poll-desc" cols="30" rows="10" placeholder='Poll Description' onChange={handleInputs} value={pollDesc} required></textarea>
        </div>
        <OptionGenerator/>
        <p>Upload a CSV file to get the name of the eligible voters</p>
        <FileUpload/>
        <div className='check-box'>
          <input type="checkbox" id="visibility" name="visibility" onChange={handleInputs} value={visibility} required/>
          <label>Allow Result Visibility to Voters</label>
        </div>
        <div className='dateTime-inputs'>
          <div className="start-event">
            <label htmlFor="">Start Date and Time :</label>
            <input type="date" name="startDate" id="startDate" onChange={handleInputs} value={startDate} required/>
            <input type="time" name='startTime' id='startTime' onChange={handleInputs} value={startTime} required/>
          </div>
          <div className="end-event">
            <label htmlFor="">End Date and Time :</label>
            <input type="date" name="endDate" id="endDate" onChange={handleInputs} value={endDate} required/>
            <input type="time" name='endTime' id='endTime' onChange={handleInputs} value={endTime} required/>
          </div>
        </div> 
        <button className='submit-btn'>Submit</button>
      </form>
    </section>
  )
}

export default Createpoll