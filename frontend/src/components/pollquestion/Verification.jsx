import React, { useState } from 'react'

function Verification(props) {

  // Hooks for forms
  const [tokenInput, setTokenInput] = useState("")
  const [userNotFound, setUserNotFound] = useState(false)


  // Functions for forms
  function changeTokenInput(e) {
    setTokenInput(e.target.value);
  }

  function checkToken(e) {
    e.preventDefault();
    props.roomData.allowedUsers.filter((user, index) => {
      if(user.Token === tokenInput){
        setUserNotFound(true);
        return props.setUserToken(tokenInput);
      } 
    })
  }



  return (
    <div class='bg-gray-900'>
        <h1 class="pt-[9rem] text-5xl font-bold text-center text-white">Verify your token</h1>
        <div class="pt-[5rem] pb-[18rem] w-full flex items-center flex-col gap-[2rem] justify-center">
        <h1 class="text-3xl font-bold text-center text-white">{props.roomData.title}</h1>
        <p class="text-2xl font-bold text-center text-gray-400">{props.roomData.description}</p>
          <form onSubmit={checkToken} class="flex items-center justify-center flex-row">
              <div class="relative">
                  <input type="text" id="floating_filled" value={tokenInput} onChange={changeTokenInput} class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                  <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Enter Token ID</label>
              </div>
              <button class="ml-2 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Icon description</span>
              </button>
          </form>

        </div>
    </div>
  )
}

export default Verification