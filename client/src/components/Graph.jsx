import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = () => {
  const data = {
    labels: ['June 24', 'June 26', 'June 30', 'July 4', 'July 5', 'July 6'],
    datasets: [
      {
        label: 'Play Count',
        data: [12, 19, 3, 5, 15, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        // yAxisID: 'y-axis-1',
      },
      // {
      //   label: '# of No Votes',
      //   data: [1, 2, 1, 1, 2, 2],
      //   fill: false,
      //   backgroundColor: 'rgb(54, 162, 235)',
      //   borderColor: 'rgba(54, 162, 235, 0.2)',
      //   yAxisID: 'y-axis-1',
      // },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        // {
        //   type: 'linear',
        //   display: true,
        //   position: 'right',
        //   id: 'y-axis-2',
        //   gridLines: {
        //     drawOnArea: false,
        //   },
        // },
      ],
    },
  };

  return (
    <Line
    data={data}
    options={options} />
  );
};

 export  default Graph;
