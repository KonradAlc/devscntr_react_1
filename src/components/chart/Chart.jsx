import React from 'react';
import './chart.css';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


const Chart = (props) => {
    const chartFillColor1 = "#3751FF30"
    const chartLineColor1 = "#3751FF"
    const chartFillColor2 = "#DFE0EB30"
    const chartLineColor2 = "#DFE0EB"
  
    const chartData = {
      labels: [0,2,4,6,8,10,12,14,16,18,20,22],
      datasets: [
        {
          label: props.label1,
          data: props.data1,
          fill: true,
          backgroundColor: chartFillColor1,
          borderColor: chartLineColor1
        },
        {
          label: props.label2,
          data: props.data2,
          fill: true,
          backgroundColor: chartFillColor2,
          borderColor: chartLineColor2
        }
      ]
    }
  
    const chartOptions = {
        tension: .5, 
        layout: {
            padding: 30
        },
        plugins: {
            /* Chart title
                title: {
                    display: true,
                    text: ["Today's trends","as of 25 May 2019, 09:41 PM"],
                    align: "start",
                    color: "#9FA2B4",
                    font: {
                        size: 14,
                        weight: "light"
                    }
                },
            */
            legend: {
                align: "end",
                labels: {
                    boxWidth: 20,
                    boxHeight: 0,
                },
            },
        },
        elements: {
            point: {
            radius: 0
            }
        }
    }

    return (
        <Line data={chartData} options={chartOptions} />
    )
}

export default Chart;