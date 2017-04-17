import React, { Component } from 'react';
import { Row, Col, Grid, Panel, Image, ResponsiveContainer} from 'react-bootstrap';
import icon from '../image/Timer.png'
// import data from '../data/work_hour_per_week'
import axios from 'axios'

const API_URL = 'http://128.199.99.233:3000/api/';

function GetFinalData (data,selectorChoose) {
  const final_data = [];
  for (var i=0 ; i<data.length ; i++) {
    if (data[i].country_code == selectorChoose) {
      var value = data[i].data_value;
      break;
    }
  }
  if (value == 0) {
    value = "undefined"
  }
  return value;
}


class WorkHourChart extends Component {

  state = {
    data: {}
  }

  componentDidMount(){
    axios.get(API_URL + 'data/work_hour_per_week/lin/2007')
      .then(res => {
        this.setState({data: res.data});
      });
  }


  render() {
    const final_data = GetFinalData(this.state.data, this.props.valueSelect)

    return (
      <div>
         <div className="w3-container">

<div className="w3-panel w3-card w4 w3-white">
      <h5  >WORK HOURS/WEEK</h5>
      <hr />
          <Image  src={icon} height="42" width="42" responsive className="img-responsive center-block"/>
          <br />
          <p style={{alignText:'center'}}>{final_data}</p>
      </div>
      </div>
      </div>

    );
  }
}

export default WorkHourChart;
