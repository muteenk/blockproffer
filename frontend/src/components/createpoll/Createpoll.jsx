import React, { useState } from 'react';
import HeaderWithBackButton from '../header/HeaderWithBackButton'
import './createpoll.css'
import FileUpload from '../fileUpload/FileUpload'
import OptionGenerator from '../optionGenerator/OptionGenerator';






function Createpoll() {

  // Hooks for handling form data
  const [pollTitle, setPollTitle] = useState('');
  const [pollDesc, setPollDesc] = useState('');
  const [options, setOptions] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [file, setFile] = useState(null);


  // Function to handle form data
  const handleTitle = (e) => {
    setPollTitle(e.target.value);
  }

  const handleDesc = (e) => {
    setPollDesc(e.target.value);
  }

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  }

  const handleStartTime = (e) => {
    setStartTime(e.target.value);
  }

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  }

  const handleEndTime = (e) => {
    setEndTime(e.target.value);
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
    console.log(options);
    console.log(file);

  }


  return (
    <section className='create-poll'>
      <HeaderWithBackButton />
      <form onSubmit={onFormSubmit}>
        <div className='poll-input'>
          <label>Poll Title</label>
          <input type="text" name="poll-title" placeholder='Poll Title' id="poll-title" onChange={handleTitle} value={pollTitle} required/>
        </div>
        <div className='poll-input'>
          <label>Poll Description</label>
          <textarea name="poll-desc"  id="poll-desc" cols="30" rows="10" placeholder='Poll Description' onChange={handleDesc} value={pollDesc} required></textarea>
        </div>
        <OptionGenerator options={options} setOptions={setOptions} />
        <p>Upload a CSV file to get the name of the eligible voters</p>
        <FileUpload file={file} setFile={setFile} />
        <div className='check-box'>
          <input type="checkbox" id="visibility" name="visibility" onChange={handleVisibility} value={visibility} required/>
          <label>Allow Result Visibility to Voters</label>
        </div>
        <div className='dateTime-inputs'>
          <div className="start-event">
            <label htmlFor="">Start Date and Time :</label>
            <input type="date" name="startDate" id="startDate" onChange={handleStartDate} value={startDate} required/>
            <input type="time" name='startTime' id='startTime' onChange={handleStartTime} value={startTime} required/>
          </div>
          <div className="end-event">
            <label htmlFor="">End Date and Time :</label>
            <input type="date" name="endDate" id="endDate" onChange={handleEndDate} value={endDate} required/>
            <input type="time" name='endTime' id='endTime' onChange={handleEndTime} value={endTime} required/>
          </div>
        </div> 
        <button className='submit-btn'>Submit</button>
      </form>
    </section>
  )
}

export default Createpoll