import React, { Component } from 'react';
import {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend}  from 'recharts';
import data from  '../data/total_migration_in_2010'
import Selector from './selector'

var final_data = [];

var m;

console.log(m)

function GetData (data) {
  for (var i=0 ; i<data.length ; i++) {
    if (data[i].country_code == 'AUS') {

    }
  }
}




export default class SimpleBarChart extends Component {
  render(){
    return (
      <div>
      <BarChart width={600} height={400} data={final_data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="year"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <ReferenceLine y={0} stroke='#000'/>
       <Bar dataKey="data_value" fill="#8884d8" />
      </BarChart>
      </div>
    )
  }
}
