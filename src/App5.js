import React, { useState } from 'react';
import Chart from './components/chart';
const App5 = () => {
  const [options] = useState([
    {
      title: {
        text: 'Main chart',
      },
      series: [
        {
          data: [1, 2, 3, 5, 1, 7, 4],
        },
      ],
    },
    {
      title: {
        text: 'Second chart',
      },
      series: [
        {
          data: [3, 1, 2, 9, 5],
        },
      ],
    },
  ]);
  return (
    <div>
      {options.map((option) => (
        <Chart options={option} />
      ))}
    </div>
  );
};
export default App5;
