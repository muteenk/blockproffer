import React, { useState, useContext } from 'react'
import { questions } from '../../Helpers/QuestionBank'
import { PollContext } from '../../Helpers/Contexts'

function Questions() {

    const { setScore, score, setGameState } = useContext(PollContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const {optionChosen, setOptionChosen} = useState("");

    const nextQuestion = () => {
        setCurrQuestion(currQuestion + 1)
        // alert("Your score is " + score)
    }

    const prevQuestion = () => {
        setCurrQuestion(currQuestion - 1)
    }

    
    const finishPoll = () => {
        setGameState("endScreen")
    }
    
    return (
        <div className='poll-question-container'>
            <div className='poll-question'>
                <h1>{questions[currQuestion].prompt}</h1>
            </div>
            <div className='options'>
                <button onClick={() => setOptionChosen("A")} className='option-btn'>{questions[currQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("B")} className='option-btn'>{questions[currQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("C")} className='option-btn'>{questions[currQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("D")} className='option-btn'>{questions[currQuestion].optionD}</button>
            </div>
            <div className='poll-btn-display'>
                {currQuestion === 0 ? ( <button onClick={finishPoll} className='start-btn full-btn prev disabled-btn'>Previous</button> ) : ( <button onClick={prevQuestion} className='start-btn full-btn prev'><i className='fas fa-arrow-left'></i> Previous</button> )}

                {currQuestion === questions.length - 1 ? ( <button onClick={finishPoll} className='finish-btn full-btn next'>Finish Poll</button> ) : ( <button onClick={nextQuestion} className='finish-btn full-btn next'>Next <i className='fas fa-arrow-right'></i></button> )}
            </div>
        </div>
    )
}

export default Questions