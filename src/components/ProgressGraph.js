import React from 'react';
    import { Line } from 'react-chartjs-2';

    const ProgressGraph = () => {
      const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
          {
            label: 'Daily Tasks Completed',
            data: [1, 2, 3, 4, 5, 6, 7],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
          },
          {
            label: 'Revenue Growth ($)',
            data: [1000, 2000, 3000, 4000, 5000, 6000, 7000],
            fill: false,
            backgroundColor: 'rgba(153, 102, 255, 0.4)',
            borderColor: 'rgba(153, 102, 255, 1)',
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };

      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Progress Graphs</h2>
          <Line data={data} options={options} />
        </div>
      );
    };

    export default ProgressGraph;
