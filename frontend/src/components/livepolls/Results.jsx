import React from 'react'
import { Doughnut } from 'react-chartjs-2'



function Results(props) {

  let labels = [];
  let dataSet = [];
  let totalVotes = 0;

  props.roomData.pollOptions.map((option, index) => {
    labels = [...labels, option.option]
    dataSet = [...dataSet, option.votes]
    totalVotes += option.votes
  })

  dataSet.map((data, index) => {
    dataSet[index] = (data / totalVotes) * 100
  })

const data = {
  labels: labels,
  datasets: [
    {
      label: 'title',
      backgroundColor: [
        "#ff5758",
        "#bacaa7",
        "#10b7ba",
        "#ffdd0d",
        "#b24eb7",
        "#feeae3",
        "#cabff0",
        "#f0e6c9",
        "#f89b25",
        "#28e0c4",
        "#c1effc",
        "#1e766f",
        "#345b6d",
        "#4d2554",
        "#f3f61f",
        "#ab6274",
        "#f9bc37",
        "#d05b49",
        "#d7ebf3",
        "#9bf8c2",
        "#f9c7c7",
        "#d56b44",
      ],
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