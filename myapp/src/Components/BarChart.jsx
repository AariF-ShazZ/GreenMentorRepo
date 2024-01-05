import React from 'react';
import { Bar } from 'react-chartjs-2';
// import { BarChart, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
//   from 'recharts';
export const BarCharts = ({ data }) => {
    console.log("data =>", data);
  
    // Extracting emissions and month data from the provided object
    const emissions = data.map((item) => item['Emissions(in CO2e)']);
    const months = data.map((item) => item.Month);
  
    // Chart data configuration
    const chartData = {
      labels: months,
      datasets: [
        {              
          label: 'Emissions',
          data: emissions,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    // Chart options
    const chartOptions = {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Emissions',
          },
        },
        x: {
          title: {
            display: true,
            text: 'Month',
          },
        },
      },
    };
  
    return (
      <div>
        <h2>Emissions Chart</h2>
        <Bar data={chartData} options={chartOptions} />

      </div>
    );
  };
  