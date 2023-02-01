import React, { useState } from 'react'
import Header from '../header/Header'
import VoteSuccess from './VoteSuccess'
import Questions from './Questions'
import StartMenu from './StartMenu'
import Verification from './Verification'
import PollClosed from './PollClosed'
import { PollContext } from '../../Helpers/Contexts'

function Pollquestion(props) {

  const [question, setQuestion] = useState('finalScreen')
  const [userToken, setUserToken] = useState(null)
  const [userVoted, setUserVoted] = useState(false)
  const [score, setScore] = useState(0);

  return (
    <section className='pollQuestions'>
        <Header />

          {(userToken === null) ? <Verification roomData={props.room} userToken={userToken} setUserToken={setUserToken} setUserVoted={setUserVoted} /> : 
          <>
          <PollContext.Provider value={{ question, setQuestion, score, setScore }}>
            {(question === 'endScreen' && userVoted === true) && <VoteSuccess roomData={props.room}/>}
            {(question === 'startMenu' && userVoted === false) && <StartMenu />}
            {question === 'poll' && <Questions roomData={props.room} userToken={userToken} userVoted={userVoted} setUserVoted={setUserVoted} />}
            {(question === 'finalScreen') && <PollClosed roomData={props.room}/>}
          </PollContext.Provider>
          </>
          }

    </section>
  )
}

export default Pollquestion