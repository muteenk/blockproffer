import React, { useState, useContext, useEffect } from 'react'
import { PollContext } from '../../Helpers/Contexts'
import Header from '../header/Header';
import Timer from '../Timer/Timer';

function Questions(props) {
    const { question, setQuestion } = useContext(PollContext);

    const [optionChosen, setOptionChosen] = useState("");

    const selectOption = (e) => {
        setOptionChosen(e.target.value)  
        console.log(e.target.value)
    }


    const addVote = async () => {
        console.log(1)
        
        if (optionChosen === "") return;

        console.log(optionChosen)

        props.roomData.pollOptions.map((option, index) => {
            if (option.optionNum === Number(optionChosen)) {
                option.votes += 1;
                return;
            }
        })



        props.roomData.allowedUsers.map((user, i) => {
            console.log(user)
            if (user.Token === props.userToken) {
                console.log(user)
                user.hasVoted = true;
                return;
            }
        })

        console.log(props.roomData.allowedUsers)


        const response = await fetch('http://localhost:5555/room/upvote', {
            method: 'PATCH',
            body: JSON.stringify({
                roomID: props.roomData.roomID,
                pollOptions: props.roomData.pollOptions,
                allowedUsers: props.roomData.allowedUsers
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        console.log(response.status)

        if (response.status === 201){
            const data = await response.json();
            console.log(data);
            setQuestion("endScreen")
            
        }
        else{
            console.log("Error")
        }
    }
    
    const endDate = props.roomData.endDate;
    const endTime = props.roomData.endTime;


    const [timerDays, setTimerDays] = useState()
    const [timerHours, setTimerHours] = useState()
    const [timerMinutes, setTimerMinutes] = useState()
    const [timerSeconds, setTimerSeconds] = useState()

    let interval;
    const startTimer = () => {
        const countdownDate = new Date(endDate + " " + endTime);

        interval = setInterval(() => {
            const now = new Date();
            const distance = Math.abs(countdownDate - now);

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance <= 0) {
                // stop our timer
                clearInterval(interval.current);
                setQuestion("finalScreen")
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000)

    }

    // componentDidMount
    useEffect(() => {
        startTimer();
    }, [])
    
    return (

        <>
        <Header />
        {(props.userVoted) ? setQuestion("endScreen") : 
        <div class='bg-gray-900 h-screen w-full flex flex-col align-center justify-center'>
            <div class='flex justify-center align-center'>
                <div class='flex justify-center align-center w-8/12'>
                    <div class='flex flex-col w-8/12 align-center justify-items-center'>
                        <div>
                            <Timer timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
                        </div>
                        <h3 class="mb-4 text-center text-6xl font-semibold text-gray-900 dark:text-white">{props.roomData.title}</h3>
                        <p class="mb-4 text-center text-xl font-medium text-gray-900 dark:text-white">{props.roomData.description}</p>
                        <ul class="w-full flex justify-center flex-col text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            
                            {props.roomData.pollOptions.map((option, index) => {
                                return ( 
                                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id={"list-radio" + option.optionNum} type="radio" onChange={selectOption} value={option.optionNum} name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for={"list-radio" + option.optionNum} class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{option.option}</label>
                                </div>
                                </li>   
                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>
            <div class='flex justify-center'>
                <div class='grid justify-items-end mt-4 mb-4 w-2/5'>
                    <button onClick={addVote} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Submit
                        </span>
                    </button>
                </div>
            </div>
        </div>
}
        </>
    )
}

export default Questions