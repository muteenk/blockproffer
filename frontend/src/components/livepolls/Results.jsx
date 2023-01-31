import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import {Chart as Chartjs} from 'chart.js'

const labels = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"];
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
      data: [3, 10, 5, 2, 20, 30, 45],
      offset: true,
      borderWidth: 2,
      weight: 1,
    },
  ],
};


function Results() {
  return (
    <div class="bg-gray-900 pt-[1rem] w-full flex items-center flex-col gap-[2rem] justify-center">

        <div>
            <Doughnut data={data} />
        </div>
        <div class="text-3xl font-bold text-center text-white">Poll Title</div>
    </div>
  )
}

export default Results