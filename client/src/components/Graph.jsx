import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = (props) => {
  const { newUserFeed } = props;
  const sortByDate = newUserFeed.sort(
    (a, b) => parseFloat(a.createTime) - parseFloat(b.createTime),
  );

  const getDate = () => {
    const dateArr = [];
    sortByDate.forEach((item) => {
      const formatDate = new Date(item.createTime * 1000).toString().slice(4, 10);
      dateArr.push(formatDate);
    });
    return dateArr;
  };
  const getPlayCount = () => {
    const playCountArr = [];
    sortByDate.forEach((item) => {
      playCountArr.push(item.playCount);
    });
    return playCountArr;
  };
  const getLikes = () => {
    const likesArr = [];
    sortByDate.forEach((item) => {
      likesArr.push(item.diggCount);
    });
    return likesArr;
  };
  const getComments = () => {
    const commentsArr = [];
    sortByDate.forEach((item) => {
      commentsArr.push(item.commentCount);
    });
    return commentsArr;
  };
  const data = {
    labels: getDate(),
    datasets: [
      {
        label: 'Play Count',
        data: getPlayCount(),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        // yAxisID: 'y-axis-1',
      },
      {
        label: 'Likes',
        data: getLikes(),
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
      {
        label: 'Comments',
        data: getComments(),
        fill: false,
        backgroundColor: 'rgb(5, 88, 9)',
        borderColor: 'rgba(5, 88, 9, 0.2)',
        yAxisID: 'y-axis-3',
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-2',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-3',
        },
      ],
    },
  };

  return (
    <Line
      data={data}
      options={options}
    />
  );
};

export default Graph;
