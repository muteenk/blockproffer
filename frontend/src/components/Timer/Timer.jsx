import React, {Fragment} from 'react'

function Timer({timerDays, timerHours, timerMinutes, timerSeconds})  {


  return (
    <Fragment>
        <section>
            <section>
                <div class="flex justify-center align-center gap-[0.4rem] text-white">
                    <section class='bg-gray-800 p-[0.3rem] rounded border-[1px] border-[#eba643]'>
                        <h2 class="text-center text-[1.5rem] font-[700]">{timerDays}</h2>
                        <p class="text-gray-400 text-[1rem] font-[300]"><small>Days</small></p>
                    </section>
                    <section class='bg-gray-800 p-[0.3rem] rounded border-[1px] border-[#eba643]'>
                        <h2 class="text-center text-[1.5rem] font-[700]">{timerHours}</h2>
                        <p class="text-gray-400 text-[1rem] font-[300]"><small>Hours</small></p>
                    </section>
                    <section class='bg-gray-800 p-[0.3rem] rounded border-[1px] border-[#eba643]'>
                        <h2 class="text-center text-[1.5rem] font-[700]">{timerMinutes}</h2>
                        <p class="text-gray-400 text-[1rem] font-[300]"><small>Minutes</small></p>
                    </section>
                    <section class='bg-gray-800 p-[0.3rem] rounded border-[1px] border-[#eba643]'>
                        <h2 class="text-center text-[1.5rem] font-[700]">{timerSeconds}</h2>
                        <p class="text-gray-400 text-[1rem] font-[300]"><small>Seconds</small></p>
                    </section>
                </div>
            </section>
        </section>
    </Fragment>
  )
}

Timer.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10
}

export default Timer