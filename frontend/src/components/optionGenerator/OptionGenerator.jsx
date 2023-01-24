import React from 'react'
import { useState } from 'react'

const OptionGenerator = () => {

    const [options, setOptions] = useState(0)
    const [optionValues, setOptionValues] = useState([]);


    const [optionInput, setOptionInput] = useState('')

    const optionHandler = (e) => {
        setOptionInput(e.target.value)
    }


    const addOption = () => {
        setOptions(options + 1)
        setOptionValues([...optionValues, optionInput]);
    }

    const deleteOption = (index) => {
        setOptionValues(optionValues.filter((optionValues, i) => {
            if (i !== index) {
                return optionValues;
            }
        }))
    }

  return (
    <div className='optionGenerator'>
        <div id="options">
            {optionValues.map((optionValues, index) => {
                return <span key={index}>{optionValues} <a id={index} onClick={(e) => {deleteOption(e.target.id)}}><i class="fa-solid fa-circle-xmark"></i></a></span>
            })}
        </div>
        <input type="text" id="optionInput" onChange={optionHandler} value={optionInput} required/>
        <button type='button' onClick={addOption}>Add Option</button>
    </div>
  )
}

export default OptionGenerator