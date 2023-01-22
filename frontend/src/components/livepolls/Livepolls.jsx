import React from 'react'
import { useState } from 'react';
import HeaderWithBackButton from '../header/HeaderWithBackButton'
import './Livepolls.css'


function Livepolls() {

  const [roomName, changeRoomName] = useState("")


  function changeRoomData(e) {
    changeRoomName(e.target.value);
    console.log(e.target.value)
  }


  async function sendRoomReq(){
    const URL=`http://localhost:5555/${roomName}`;
    const Res= fetch(URL);
    const response= await Res;
    const json= await response.json();
    console.log(json);
  }

  return (
    <>
      <HeaderWithBackButton />

      <div className="room-sheduler">
        <h1>Enter Room ID: </h1>

        <form>
          <input type="text" onChange={changeRoomData} value={roomName} placeholder='Enter room ID'/>
          <button type='button' onClick={sendRoomReq}>Enter</button>
        </form>
      </div>
    </>
  )
}

export default Livepolls