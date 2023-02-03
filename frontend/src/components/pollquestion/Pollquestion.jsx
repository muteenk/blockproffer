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
  const [userToken, setUserToken] = useState(null)
  // const [hasVoted, setHasVoted] = useState(null)
  const [score, setScore] = useState(0);


  const timerCheck = (hasVoted) => {

    let startDate = new Date(props.room.startDate + " " + props.room.startTime)
    let endDate = new Date(props.room.endDate + " " + props.room.endTime)
    let currentDate = new Date();

    
    if (currentDate < startDate) {
      setQuestion("pollNotStarted")
    }
    else if (currentDate > endDate) {
      setQuestion("finalScreen")
    }
    else if (hasVoted) {
      setQuestion("endScreen")
    }
    else {
      setQuestion("startMenu")
    }

  }


  return (
    <section className='pollQuestions'>
        <Header />
        <PollContext.Provider value={{ question, setQuestion, score, setScore }}>
          {(question === 'verification') && <Verification roomData={props.room} timerCheck={timerCheck} userToken={userToken} setUserToken={setUserToken}/>}
          {(question === 'pollNotStarted') && <PollNotStarted roomData={props.room} />}
          {(question === 'startMenu') && <StartMenu />}
          {(question === 'poll') && <Questions roomData={props.room} userToken={userToken} />}
          {(question === 'endScreen') && <VoteSuccess roomData={props.room}/>}
          {(question === 'finalScreen') && <PollClosed roomData={props.room}/>}
        </PollContext.Provider>
        

    </section>
  )
}

export default Pollquestion