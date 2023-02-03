import React from 'react'
import Header from '../header/Header'
import Results from '../livepolls/Results'
import { Link } from 'react-router-dom'


function PollClosed(props) {


    return (
        <div class='h-screen bg-gray-900'>
        <Header />
        <div class='flex flex-col items-center justify-center h-full'>
            <div class='flex flex-col items-center justify-center'>
                <div class="text-center">
                    <i class="fa-solid fa-circle-exclamation text-white text-[10rem] pb-[1rem]"></i>
                    <h1 class='text-6xl text-white font-bold'>The Poll for "{props.roomData.title}" has been closed</h1>
                    <p class='text-2xl text-gray-300 font-bold pt-[2rem]'>You can find the Results Right here👇</p>
                </div>
                <Results chartData="" roomData={props.roomData} />
            </div>
            <div class='flex justify-center mt-7'>
                <Link to="/createpolls" class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
                    Make Your Own Polls
                </Link>
                <Link to="/" class='ext-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800'>
                    Back to Home
                </Link>
                <Link to="/LivePolls" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Head to Other Live Poll
                </Link>
            </div>
        </div>
    </div>
    )
    }

export default PollClosed