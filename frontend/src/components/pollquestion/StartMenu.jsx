import React from 'react'
import { useContext } from 'react'
import { PollContext } from '../../Helpers/Contexts'

function StartMenu() {
    const { question, setQuestion } = useContext(PollContext)
  return (
    <div class='bg-gray-900'>
      <div class='pt-[14rem] flex flex-col w- text-gray-400 justify-center align-center'>
        <h1 class="pb-[1rem] text-white text-center font-[700] text-[4rem]">Start the poll</h1>
        <ul class='flex flex-col pl-[9rem] justify-center text-left text-[1.7rem]'>
          <li>1.  Select your choice in the poll once the poll starts</li>
          <li>2.  Press the submit button once you have chosen your option, then wait for It to process</li>
          <li>3.  Please ensure your meta mask account is connected and signed in</li>
        </ul>
      </div>
      <div class='flex justify-center align-center'>
        <button class="mt-[7rem] mb-[17rem] relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" onClick= {() => setQuestion("poll")}>
          <span class='text-[2rem] relative px-10 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
            Start
          </span>
        </button>
      </div>
    </div>
  )
}

export default StartMenu