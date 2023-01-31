import React from 'react'
import { useState } from 'react';
import Chart from 'chart.js/auto';
import { useSearchParams, Link } from 'react-router-dom';
import { Dismiss } from 'flowbite';
import Header from '../header/Header'
import Pollquestion from '../pollquestion/Pollquestion'
import Footer from '../footer/Footer';


function Livepolls() {



  const [roomName, changeRoomName] = useState("");
  const [room, changeRoom] = useState(null);
  const [roomNotFound, changeRoomNotFound] = useState(false);


  function changeRoomData(e) {
    changeRoomName(e.target.value);
  }


  // if (queryParameters.get('rm') !== null && room === null){
  //   changeRoomName(queryParameters.get('rm'))
  //   reqRoom(queryParameters.get('rm'));
  // };




  // async function reqRoom(roomName){
    // const Res= fetch(`http://localhost:5555/room/join`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({roomName: roomName})
    // });

    

    // const response= await Res;
    // if (response.status === 200){
    //   const data = await response.json();
    //   changeRoom(data.room);
    //   changeRoomNotFound(false);
    // }
    // else{
    //   changeRoomNotFound(true);
    // }
  //   console.log(roomName)
  // }


async function sendRoomReq(e){

    e.preventDefault();

    if (roomName === "") return;

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
      changeRoom(data.room);
      changeRoomNotFound(false);
    }
    else{
      changeRoomNotFound(true);
    }
    
  }

    // target element that will be dismissed
  const $targetEl = document.getElementById('targetElement');

  // optional trigger element
  const $triggerEl = document.getElementById('triggerElement');

  // options object
  const options = {
    transition: 'transition-opacity',
    duration: 1000,
    timing: 'ease-out',

    // callback functions
    onHide: (context, targetEl) => {
      console.log('element has been dismissed')
      console.log(targetEl)
    }
  };


  const dismiss = new Dismiss($targetEl, $triggerEl, options);



  

  return (
    <>
      <Header />
    {(room == null) ? 
    <div class='bg-gray-900 flex flex-col items-center justify-center'>
      <form onSubmit={sendRoomReq}>
        {(roomNotFound === true) ? <><div id="alert-border-2" class="flex p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
    <svg class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
    <div class="ml-3 text-sm font-medium">
      Error Room Not Found
    </div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-2" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div></> : ""}
        <div class="w-full h-screen flex items-center justify-center flex-col gap-[5rem]">
          <h1 class="text-5xl font-bold text-white">Enter Room ID</h1>
          <div class="w-full flex items-center justify-center flex-row">
            <div class="relative">
                <input type="text" onChange={changeRoomData} value={roomName} id="floating_filled" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter Room ID</label>
            </div>
            <button class="ml-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>

        </div>
      </form>
    </div> : <Pollquestion room={room} />}

    <Footer />
    </>
  )
}

export default Livepolls