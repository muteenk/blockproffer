import React from 'react'
import { useState } from 'react'
import Option from './Option'

const OptionGenerator = (props) => {
    
    const [optionInput, setOptionInput] = useState('');

    const optionHandler = (e) => {
        setOptionInput(e.target.value)
    }

    const addOption = () => {
        if (optionInput === ""){
            return;
        }
        props.setOptions([...props.options, {optionInput : 0}]);
        setOptionInput('');
    }

    const deleteOption = (index) => {
        props.setOptions(props.options.filter((e, i) => {
            return i !== index;
        }))
    }

  return (
    <div class='mt-6'>

        <div id="options">
            {props.options.map((e, index) => {
                return <Option key={index} i={index} data={e} deleteOption={deleteOption}/>
            })}
        </div>
            <label class="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800">
                <input type="text" placeholder="Add Options" class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 dark:text-white sm:text-sm" id="optionInput" onChange={optionHandler} value={optionInput}/>
                <span class="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200">Add Options</span>
            </label>
            <button class="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" type='button' onClick={addOption}>
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Add Option</span>
            </button>
    </div>
  )
}

export default OptionGenerator