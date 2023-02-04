import React, { useState } from 'react';
import Header from '../header/Header'
import Papa from 'papaparse'
import FileUpload from '../fileUpload/FileUpload'
import OptionGenerator from '../optionGenerator/OptionGenerator';
import Success from './Success';
import Footer from '../footer/Footer';
import { useKey } from '../../useKeyHook.js';
import { createPoll } from '../../Blockchain.services'


function Createpoll() {


  // ------------------ Hooks ------------------ //

  // Hook for room data
  const [room, setRoom] = useState(null);
  const [roomErr, setRoomErr] = useState(null);

  // Hooks for handling form data
  const [pollTitle, setPollTitle] = useState('');
  const [pollDesc, setPollDesc] = useState('');
  const [options, setOptions] = useState([]);
  const [sendEmail, setSendEmail] = useState(false);
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
  const handleSendEmail = e => setSendEmail(sendEmail ? false : true);
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

  function handleEnter()
  {
    console.log("Enter pressed");
  }

  useKey("Enter", handleEnter);

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
    setRoomErr(null);

    if (options.length < 2) {
      setRoomErr("Please add atleast 2 options")
      alert("Please add atleast 2 options");
      return;
    }

    const formData = {
      form: {
      title : pollTitle,
      description : pollDesc,
      pollOptions : options,
      resultVisibility : visibility,
      startDate,
      startTime,
      endDate,
      endTime,
      allowedUsers : fileData
    },
    sendEmail
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

    if (response.status === 201){
      await createPoll(data.room.roomID)
    }

    (response.status === 201) ? setRoom(data.room) : setRoomErr("Something Went Wrong !");

  }


  return (
    <>
    {(room !== null) ? <Success roomID={room.roomID}/> : 
    <section class='bg-gray-900'>
      <Header />
      <div class='pt-[9rem] text-white text-5xl text-center '>
        <h1 class='font-mono'>Create Poll</h1>
      </div>
      <div class='pt-[2rem] text-[#f0592f] text-xl text-center '>
        <h1 class='font-mono'>{(roomErr !== null) ? roomErr : ""}</h1>
      </div>
      <div class=" flex flex-col items-center justify-center">
    <section class="mt-16 w-8/12">
      <form onSubmit={onFormSubmit} class="mt-6 mb-3">

        <div class="relative">
            <input type="text" name="poll-title" id="poll-title" onChange={handleTitle} value={pollTitle} required class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Poll Title</label>
        </div>
        <div class='relative'>
          <textarea name="poll-desc" class="mt-8 text-xl resize-none block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="poll-desc" cols="30" rows="10" placeholder='' onChange={handleDesc} value={pollDesc} required></textarea>
          <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Poll Description</label>
        </div>
        
        <OptionGenerator options={options} setOptions={setOptions} />
        
        <FileUpload file={file} setFile={setFile} fileError={fileError} setFileError={setFileError} handleFileParse={handleFileParse} />
        
        <div class="flex items-center mt-4 mb-4">
            <input id="email-checkbox" onChange={handleSendEmail} value={sendEmail} type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="email-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Send Tokens to Users through Emails (from csv file)</label>
        </div>

        <div class="flex items-center mt-4 mb-4">
            <input id="visibility-checkbox" onChange={handleVisibility} value={visibility} type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="visibility-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Allow Result Visibility to Voters</label>



        </div>

        <div class='flex justify-center gap-4 items-center'>
          <div class='mt-2 flex flex-col gap-6 w-full'>
            <label  class='text-xl text-white'>Start Date :</label>
            <input class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text- mb-4 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" type="date" name="startDate" id="startDate" onChange={handleStartDate} value={startDate} />
            <label htmlFor="" class='text-xl text-white'>Start Time :</label>
            <input type="time" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" name='startTime' id='startTime' onChange={handleStartTime} value={startTime}/>
          </div>
          <div class='flex flex-col gap-[2rem] w-full'>
            <label class='text-xl text-white'>End Date :</label>
            <input type="date" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" name="endDate" id="endDate" onChange={handleEndDate} value={endDate}/>
            <label class='text-xl text-white'>End Time :</label>
            <input type="time" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" name='endTime' id='endTime' onChange={handleEndTime} value={endTime}/>
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
    }
    </>
  )
}

export default Createpoll