import React, { useState } from 'react';
import HeaderWithBackButton from '../header/HeaderWithBackButton'
import './createpoll.css'
import '../optionGenerator/optionGenerator.css'
import Papa from 'papaparse'
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

  // Hooks for handling file upload
  const [file, setFile] = useState("");
  const [fileError, setFileError] = useState("");
  const [fileData, setFileData] = useState([]);


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


    const uploadHandler = async (e) => {
        setFileError("");
         
        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = await e.target.files[0];
             
            // Check the file extensions, if it not
            // included in the allowed extensions
            // we show the error

            const allowedExtensions = ["csv"];
            const fileExtension = await inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setFileError("Please input a csv file !");
                return;
            }
 
            // If input type is correct set the state
            return inputFile
        }
  }


  const handleFileParse = async (e) => {
         
    // If user clicks the parse button without
    // a file we show a error
    let inpFile = await uploadHandler(e);
    setFile(inpFile);
    if (!inpFile) return setFileError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();
     
    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
        const csv =  Papa.parse(target.result, { header: true });
        const parsedData = csv?.data;
        setFileData(parsedData);
    };
    reader.readAsText(inpFile);
}


  const onFormSubmit = async (e) => {
    e.preventDefault();


    const formData = {
      title : pollTitle,
      description : pollDesc,
      pollOptions : options,
      resultVisibility : visibility,
      startDate,
      startTime,
      endDate,
      endTime,
      allowedUsers : fileData
    }

    console.log(formData)

    const response = await fetch('http://localhost:5555/room/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    console.log(response)
    const data = await response.json();
    console.log(data);


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
        <FileUpload file={file} setFile={setFile} fileError={fileError} setFileError={setFileError} handleFileParse={handleFileParse} />
        <div className='check-box'>
          <input type="checkbox" id="visibility" name="visibility" onChange={handleVisibility} value={visibility} required/>
          <label>Allow Result Visibility to Voters</label>
        </div>
        <div className='dateTime-inputs'>
          <div className="start-event">
            <label htmlFor="">Start Date :</label>
            <input type="date" name="startDate" id="startDate" onChange={handleStartDate} value={startDate}/>
            <label htmlFor="">Start Time :</label>
            <input type="time" name='startTime' id='startTime' onChange={handleStartTime} value={startTime}/>
          </div>
          <div className="end-event">
            <label htmlFor="">End Date :</label>
            <input type="date" name="endDate" id="endDate" onChange={handleEndDate} value={endDate}/>
            <label htmlFor="">End Time :</label>
            <input type="time" name='endTime' id='endTime' onChange={handleEndTime} value={endTime}/>
          </div>
        </div> 
        <div className="btn-area">
          <button className='submit-btn'>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default Createpoll