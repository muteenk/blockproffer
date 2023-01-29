import React, { useState } from 'react';
import HeaderWithBackButton from '../header/HeaderWithBackButton'
import Papa from 'papaparse'
import FileUpload from '../fileUpload/FileUpload'
import OptionGenerator from '../optionGenerator/OptionGenerator';
import Footer from '../footer/Footer';



function Createpoll() {


  // ------------------ Hooks ------------------ //

  // Hook for room data
  const [room, setRoom] = useState(null);
  const [roomErr, setRoomErr] = useState(null);

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
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [fileData, setFileData] = useState([]);



  // ----------- Functions to handle form data states ----------- //

  const handleTitle = e => setPollTitle(e.target.value);
  const handleDesc = e => setPollDesc(e.target.value);
  const handleStartDate = e => setStartDate(e.target.value);
  const handleStartTime = e => setStartTime(e.target.value);
  const handleEndDate = e => setEndDate(e.target.value);
  const handleEndTime = e => setEndTime(e.target.value);
  const handleVisibility = e => setVisibility(visibility ? false : true);



  // ----------- Functions for file handling ----------- //


  const uploadHandler = (e) => {
    setFileError("");
    
    // Checking if user has selected wrong file
    if (e.target.files.length) {
        const inputFile = e.target.files[0];

        const allowedExtensions = ["csv"];

        const fileExtension = inputFile?.type.split("/")[1];
        if (!allowedExtensions.includes(fileExtension)) {
            setFileError("Please input a csv file !");
            return -1;
        }

        return inputFile
    }
  }


  const handleFileParse = (e) => {
         
    // If user clicks the parse button without
    // a file we show a error
    let inpFile = uploadHandler(e);
    
    if (!inpFile) return setFileError("Enter a valid file");

    if (inpFile === -1) return setFileError("Please input a csv file !");

    setFile(inpFile);

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();
     
    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = ({ target }) => {
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

    const response = await fetch('http://localhost:5555/room/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const data = await response.json();
    console.log(data);

    (response.status === 201) ? setRoom(data.room) : setRoomErr(data.room);

  }


  return (
    <section className='create-poll'>
      <HeaderWithBackButton />
      <div className="new-room">
        <h2 className="room-key">
          <span className="room-key-text">{(room !== null ) ? room.roomID : ""}</span>
        </h2>
      </div>
      <div class=" flex flex-col items-center justify-center">
    <section class="mt-16 w-8/12">
      <form onSubmit={onFormSubmit} class="mb-3">

        <label class="z-auto text-xl relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800">
          <input type="text" name="poll-title" placeholder='Poll Title' id="poll-title" onChange={handleTitle} value={pollTitle} required class="text-xl peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 dark:text-white sm:text-sm"/>
          <span class="text-xl absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200">Poll Title</span>
        </label>
        
        <textarea name="poll-desc" class="mt-8 text-xl resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="poll-desc" cols="30" rows="10" placeholder='Poll Description' onChange={handleDesc} value={pollDesc} required></textarea>
        
        <OptionGenerator options={options} setOptions={setOptions} />
        
        <FileUpload file={file} setFile={setFile} fileError={fileError} setFileError={setFileError} handleFileParse={handleFileParse} />
        
        <div class="flex items-center mt-4 mb-4">
            <input id="default-checkbox" onChange={handleVisibility} value={visibility} type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-black-900 dark:text-black-300">Allow Result Visibility to Voters</label>
        </div>
        <div class='flex justify-center gap-4 items-center'>
          <div class='w-full'>
            <label htmlFor="">Start Date :</label>
            <input class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="date" name="startDate" id="startDate" onChange={handleStartDate} value={startDate}/>
            <label htmlFor="">Start Time :</label>
            <input type="time" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='startTime' id='startTime' onChange={handleStartTime} value={startTime}/>
          </div>
          <div class='w-full'>
            <label htmlFor="">End Date :</label>
            <input type="date" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="endDate" id="endDate" onChange={handleEndDate} value={endDate}/>
            <label htmlFor="">End Time :</label>
            <input type="time" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='endTime' id='endTime' onChange={handleEndTime} value={endTime}/>
          </div>
        </div>
        <div class="grid justify-items-end mt-4 mb-4">
          <button class="mt-2 font-black` text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Submit</button>
        </div>
      </form>
    </section>
    </div>
    <Footer />
    </section>
  )
}

export default Createpoll