/*simple highchart*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import data1 from './data.js';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import data from './data.json';

console.log(data.name);

const options = {
  chart: {
    type: 'pie',
  },
  title: {
    text: 'Brands',
  },
  series: [
    {
      colorByPoint: true,
      data: [
        {
          name: 'Chrome',
          y: 70.67,
        },
        {
          name: 'Edge',
          y: 14.77,
        },
        {
          name: 'Firefox',
          y: 4.86,
        },
        {
          name: 'Safari',
          y: 2.63,
        },
        {
          name: 'Internet Explorer',
          y: 1.53,
        },
        {
          name: 'Opera',
          y: 1.4,
        },
        {
          name: 'Sogou Explorer',
          y: 0.84,
        },
        {
          name: 'QQ',
          y: 0.51,
        },
        {
          name: 'Other',
          y: 2.6,
        },
      ],
    },
  ],
};
export default function App() {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
