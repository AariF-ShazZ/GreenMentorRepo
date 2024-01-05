import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
  // Example data

  console.log("data =>", data);
  
  // Extracting emissions and month data from the provided object
  const emissions = data.map((item) => item['Emissions(in CO2e)']);
  const months = data.map((item) => item.Month);

  const barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];

  const chartData = {
    labels: months,
    datasets: [{
      backgroundColor: barColors,
      data: emissions
    }]
  };

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: "World Wide Wine Production 2018"
      }
    }
  };

  return (
    <div>
      <h2>Doughnut Chart</h2>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
