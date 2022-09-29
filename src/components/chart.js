import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import HighchartsReact from 'highcharts-react';
import Highcharts from 'highcharts';

const Chart = ({ options }) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
