/*simple highchart with json value only*/
import React, { Component } from 'react';
//import employee from './employee.json';
import data1 from './data.json';

export default class App1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          {data1.map((record, i) => (
            <li key={i}>
              {record.name} - {record.y}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

//export default App1;
