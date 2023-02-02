import React from 'react'
import { Doughnut } from 'react-chartjs-2'



function Results(props) {

  let labels = [];
  let dataSet = [];
  let totalVotes = 0;
  let bg = [];

  props.roomData.pollOptions.map((option, index) => {
    labels = [...labels, option.option]
    dataSet = [...dataSet, option.votes]
    totalVotes += option.votes
  })

  if (totalVotes > 0){
    dataSet.map((data, index) => {
      return (data / totalVotes) * 100
    })
    bg = [
      "#ff5758",
      "#10b7ba",
      "#ffdd0d",
      "#b24eb7",
      "#1e766f",
      "#345b6d",
      "#4d2554",
      "#ab6274",
      "#d05b49",
      "#d56b44",
    ]
  }
  else{
    labels = ["No one has voted"]
    dataSet = [1]
    bg = ["#323232"]
  } 

const data = {
  labels: labels,
  datasets: [
    {
      label: 'title',
      backgroundColor: bg,
      borderColor: "#d3d7e5",
      data: dataSet,
      offset: true,
      borderWidth: 2,
      weight: 1,
    },
  ],
};

  return (
    <div class="bg-gray-900 pt-[1rem] w-full flex items-center flex-col gap-[2rem] justify-center">

        <div>
            <Doughnut data={data} />
        </div>
        <div class="text-3xl font-bold text-center text-white">{props.roomData.title}</div>
    </div>
  )
}

export default Results