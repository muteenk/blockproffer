import React from 'react'
import { useState } from 'react'
import './optionGenerator.css'
import Option from './Option'
import '../createpoll/createpoll.css'

const OptionGenerator = (props) => {
    
    const [optionInput, setOptionInput] = useState('');

    const optionHandler = (e) => {
        setOptionInput(e.target.value)
    }

    const addOption = () => {
        if (optionInput === "") return;
        props.setOptions([...props.options, optionInput]);
    }

    const deleteOption = (index) => {
        props.setOptions(props.options.filter((e, i) => i !== index))
    }

  return (
    <div className='optionGenerator'>

        <div className='poll-input'>
            <label>Add Options</label>
        </div>

        <div id="options">
            {props.options.map((e, index) => {
                return <Option i={index} data={e} deleteOption={deleteOption}/>
            })}
        </div>
        <div className='poll-input'>
            <input type="text" placeholder='Add Options' id="optionInput" onChange={optionHandler} value={optionInput}/>
            <button type='button' onClick={addOption}>Add Option</button>
        </div>
    </div>
  )
}

export default OptionGenerator