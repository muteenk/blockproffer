import React from 'react'
import Header from '../header/Header'
import Results from './Results'


function PollClosed(props) {


    return (
        <div class='h-screen bg-gray-900'>
        <Header />
        <div class='flex flex-col items-center justify-center h-full'>
            <div class='flex flex-col items-center justify-center'>
                <div class="text-center">
                    <i class="fa-solid fa-circle-exclamation text-white text-[10rem] pb-[1rem]"></i>
                    <h1 class='text-6xl text-white font-bold'>Sorry the Poll for "Poll Name" has been closed</h1>
                    <p class='text-2xl text-gray-300 font-bold pt-[2rem]'>You can find the Results Right here👇</p>
                </div>
                <Results />

            </div>
        </div>
    </div>
    )
    }

export default PollClosed