import React, { useState } from 'react'
import Header from '../header/Header'
import VoteSuccess from './VoteSuccess'
import Questions from './Questions'
import StartMenu from './StartMenu'
import Verification from './Verification'
import PollNotStarted from './PollNotStarted'
import PollClosed from './PollClosed'
import { PollContext } from '../../Helpers/Contexts'

function Pollquestion(props) {

  const [question, setQuestion] = useState('verification')
  // const [userToken, setUserToken] = useState(null)
  // const [userVoted, setUserVoted] = useState(false)
  const [score, setScore] = useState(0);


  const timerCheck = () => {
    
    let startDate = new Date(props.room.startDate + " " + props.room.startTime)
    let endDate = new Date(props.room.endDate + " " + props.room.endTime)
    let currentDate = new Date();
    
    if (currentDate < startDate) {
      setQuestion("pollNotStarted")
    }
    else if (currentDate > endDate) {
      setQuestion("pollClosed")
    }
    else {
      setQuestion("startMenu")
    }




    // console.log("Start Date : "+startDate)
    // console.log("End Date : "+endDate)
    // console.log("Start Time : "+startDate.getTime())
    // console.log("End Time : "+endDate.getTime())

    // const diffTime = Math.abs(endDate - startDate);
    // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    // console.log(diffTime + " milliseconds");
    // console.log(diffDays + " days");

    // console.log(startDate)
    // console.log(endDate)
    // console.log()
  

    // setQuestion("startMenu")
  }


  return (
    <section className='pollQuestions'>
        <Header />
        <PollContext.Provider value={{ question, setQuestion, score, setScore }}>
          {(question === 'verification') && <Verification roomData={props.room} timerCheck={timerCheck} />}
          {(question === 'pollNotStarted') && <PollNotStarted roomData={props.room} />}
          {(question === 'startMenu') && <StartMenu />}
          {(question === 'poll') && <Questions roomData={props.room} />}
          {(question === 'endScreen') && <VoteSuccess roomData={props.room}/>}
          {(question === 'finalScreen') && <PollClosed roomData={props.room}/>}
        </PollContext.Provider>
        

    </section>
  )
}

export default Pollquestion