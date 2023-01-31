import React from 'react'
import Results from '../livepolls/Results'

function VoteSuccess(props) {
    return (
    <div class='h-screen bg-gray-900'>
        <div class='pt-[5rem]'>
            <svg viewBox="0 0 24 24" class="text-green-600 w-[10rem] h-[10rem] mx-auto my-6"><path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path></svg>
        </div>
        <div class="text-5xl pt-[1rem] pb-[1rem] font-bold text-center text-green-600">Thank You for Voting</div>
        { (props.roomData.resultVisibility) ? <Results chartData="" roomData={props.roomData} /> : "" }
    </div>
    )
    }

export default VoteSuccess