import React, { useState } from 'react'
import HeaderWithBackButton from '../header/HeaderWithBackButton'
import EndScreen from './EndScreen'
import Questions from './Questions'
import StartMenu from './StartMenu'
import { PollContext } from '../../Helpers/Contexts'

function Pollquestion(room) {

  const [question, setQuestion] = React.useState('startMenu')
  const [score, setScore] = useState(0);
  return (
    <section className='pollQuestions'>
        <HeaderWithBackButton />
          <PollContext.Provider value={{ question, setQuestion, score, setScore }}>
            {question === 'startMenu' && <StartMenu />}
            {question === 'poll' && <Questions roomData={room.room} />}
            {question === 'endScreen' && <EndScreen />}
          </PollContext.Provider>

    </section>
  )
}

export default Pollquestion