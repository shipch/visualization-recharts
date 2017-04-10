import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import data from '../data/DATA.json'
import dat from  '../data/total_migration_in_2010'

var final_data = [];

function GetData (data,selectorChoose) {
  for (var i=0 ; i<data.length ; i++) {
    if (data[i].country_code == selectorChoose) {
      final_data.push(data[i]);
    }
  }
}

export default class SimpleLineChart extends Component {
  render(){
    console.log("eiei", this.props.valueSelect)
    GetData(dat,this.props.valueSelect)
    console.log(final_data)

    return (
      <div>
        <LineChart width={600} height={400} data={data}>
          <Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    )
  }
}

// ReactDOM.render(
//   <SimpleLineChart />,
//   document.getElementById('container')
// );
