import React from 'react'
import { Link } from 'react-router-dom'

function Success() {
  return (
    <div class='bg-gray-900 h-screen'>
        <div class="pt-[16rem]">
            <h1 className="text-5xl text-center font-bold text-green-600">Success!</h1>
            <svg viewBox="0 0 24 24" class="text-green-600 w-[10rem] h-[10rem] mx-auto my-6"><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path></svg>
            <p className="text-3xl text-center text-gray-400">Your poll has been created.</p>

            <div className='mt-5 w-full flex justify-center'>
                <div className=' w-1/2'>
                    <div class="flex w-full">
                        <span class="p-5 cursor-pointer hover:bg-gray-900 inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <i class="fa-regular fa-copy"></i>
                        </span>
                        <input class="text-center rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value='5fde0114-ef0a-42cb-a10c-ff2186e79f43'/></div>
                </div>
            </div>

            <div class='flex justify-center mt-7'>
                <Link to="/createpolls" class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
                    Make Another Poll
                </Link>
                <Link to="/" class='ext-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800'>
                    Back to Home
                </Link>
            </div>
        </div>


    </div>
  )
}

export default Success