import React, { Component } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import pdata from './data.json';
import pdata1 from './data1.json';

class App7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        xAxis: {
          categories: ['A', 'B', 'C'],
        },
        series: [{ data: pdata }],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this),
              },
            },
          },
        },
      },
      hoverData: null,
    };
  }

  setHoverData = (e) => {
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category });
  };

  updateSeries = () => {
    // The chart is updated only with new options.
    this.setState({
      chartOptions: {
        series: [{ data: pdata }],
      },
    });
  };
  updateSeries1 = () => {
    // The chart is updated only with new options.
    this.setState({
      chartOptions: {
        series: [{ data: pdata1 }],
      },
    });
  };

  render() {
    const { chartOptions, hoverData } = this.state;

    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        <h3>Hovering over {hoverData}</h3>
        <button onClick={this.updateSeries.bind(this)}>Update Series1</button>
        <button onClick={this.updateSeries1.bind(this)}>Update Series</button>
      </div>
    );
  }
}

export default App7;
