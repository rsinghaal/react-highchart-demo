/*simple highchart*/
import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import pdata from './data.json';

const options = {
  chart: {
    type: 'scatter',
  },
  title: {
    text: 'Brands',
  },
  series: [
    {
      data: pdata,
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
