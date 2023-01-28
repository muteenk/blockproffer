import React from 'react'
import { useState } from 'react';
import HeaderWithBackButton from '../header/HeaderWithBackButton'
import Pollquestion from '../pollquestion/Pollquestion'
import Footer from '../footer/Footer';


function Livepolls() {

  const [roomName, changeRoomName] = useState("")

  const [room, changeRoom] = useState(null);

  const [roomNotFound, changeRoomNotFound] = useState(false);


  function changeRoomData(e) {
    changeRoomName(e.target.value);
  }


  async function sendRoomReq(e){

    e.preventDefault();

    const Res= fetch(`http://localhost:5555/room/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({roomName: roomName})
    });

    const response= await Res;
    if (response.status === 200){
      const data = await response.json();
      console.log(data);
      changeRoom(data);
      changeRoomNotFound(false);
    }
    else{
      changeRoomNotFound(true);
    }
    
  }


  

  return (
    <>
      <HeaderWithBackButton />

    {(room == null) ? 
    <div class='flex flex-col items-center justify-center'>
      <form onSubmit={sendRoomReq}>
        <div class="w-full h-screen flex items-center justify-center">
          <div clas="flex items-center justify-center">
            <label class=" relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800" required>
              <input type="text" onChange={changeRoomData} value={roomName} placeholder="Enter Room ID" class="w-10/12 peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 dark:text-white sm:text-sm"/>
              <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200">Enter Room ID</span>
            </label>
          </div>
          {(roomNotFound === true) ? <><h4 className='notFound'>Error : Room Not Found !</h4></> : ""}
          <button type="button" class="ml-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Icon description</span>
          </button>

        </div>
      </form>
    </div> : <Pollquestion/>}

      
    </>
  )
}

export default Livepolls