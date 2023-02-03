import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Results from '../livepolls/Results'
import { PollContext } from '../../Helpers/Contexts'
import { Link } from 'react-router-dom'


function VoteSuccess(props) {

    const { question, setQuestion } = useContext(PollContext)

    const navigate = useNavigate();


    return (
    <div class='h-screen bg-gray-900'>
        <div class='pt-[5rem]'>
            <svg viewBox="0 0 24 24" class="text-green-600 w-[10rem] h-[10rem] mx-auto my-6"><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path></svg>
        </div>
        <div class="text-5xl pt-[1rem] pb-[1rem] font-bold text-center text-green-600">Thank You for Voting</div>
        { (props.roomData.resultVisibility) ? <Results chartData="" roomData={props.roomData} /> : "" }
        <div class='flex justify-center mt-7'>
            <Link to="/createpolls" class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
                Make Your Own Polls
            </Link>
            <Link to="/" class='ext-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800'>
                Back to Home
            </Link>
            <button type='button' onClick={() => {navigate(0)}} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Head to Other Live Poll
            </button>
        </div>
    </div>
    )
    }

export default VoteSuccess