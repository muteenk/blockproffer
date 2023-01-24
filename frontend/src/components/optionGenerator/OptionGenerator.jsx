import React from 'react'
import { useState } from 'react'
import './optionGenerator.css'
import Option from './Option'

const OptionGenerator = (props) => {
    
    const [optionInput, setOptionInput] = useState('')
    // const [optionValues, setOptionValues] = useState([]);

    const optionHandler = (e) => {
        setOptionInput(e.target.value)
    }

    const addOption = () => {
        // setOptionValues([...optionValues, optionInput]);
        props.setOptions([...props.options, optionInput]);
        setOptionInput('');
    }

    const deleteOption = (option) => {
        props.setOptions(props.options.filter(e => {
            return e !== option;
        }))
    }

  return (
    <div className='optionGenerator'>

        <h3>Add Options</h3>

        <div id="options">
            {props.options.map((e, index) => {
                return <Option key={index} data={e} deleteOption={deleteOption}/>
            })}
        </div>
        <input type="text" id="optionInput" onChange={optionHandler} value={optionInput} required/>
        <button type='button' onClick={addOption}>Add Option</button>
    </div>
  )
}

export default OptionGenerator