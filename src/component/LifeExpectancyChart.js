import React, { Component } from 'react';
import { Row, Col, Grid, Panel, Image, ResponsiveContainer} from 'react-bootstrap';
import icon from '../image/Old.png'
import axios from 'axios'
import '../stylesheet/box.css'

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


class LifeExpectancyChart extends Component {

  state = {
    data: {}
  }

  componentDidMount(){
    axios.get(API_URL + 'data/life_expectancy/lin/2015')
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
      <h5  >LIFE EXPECTANCY</h5>
      <hr />
      <Image  src={icon} height="42" width="42" responsive className="img-responsive center-block"/>
      <br />
      <p>{final_data}</p>
      </div>
      </div>
      </div>
    );
  }
}

export default LifeExpectancyChart;
