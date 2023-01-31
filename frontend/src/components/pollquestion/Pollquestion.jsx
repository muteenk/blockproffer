import React, { useState } from 'react'
import Header from '../header/Header'
import EndScreen from './EndScreen'
import Questions from './Questions'
import StartMenu from './StartMenu'
import Verification from './Verification'
import { PollContext } from '../../Helpers/Contexts'

function Pollquestion(room) {

  const [question, setQuestion] = useState('startMenu')
  const [userToken, setUserToken] = useState(null)
  const [score, setScore] = useState(0);

  return (
    <section className='pollQuestions'>
        <Header />

          {(userToken === null) ? <Verification roomData={room.room} userToken={userToken} setUserToken={setUserToken} /> : 
          <PollContext.Provider value={{ question, setQuestion, score, setScore }}>
            {question === 'startMenu' && <StartMenu />}
            {question === 'poll' && <Questions roomData={room.room} />}
            {question === 'endScreen' && <EndScreen />}
          </PollContext.Provider>
          }

    </section>
  )
}

export default Pollquestion