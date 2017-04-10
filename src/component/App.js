import React, { Component } from 'react';
import '../stylesheet/App.css';
import { Row, Col } from 'react-bootstrap';
import SimpleLineChart from './SimpleLineChart'
import SimpleBarChart from './SimpleBarchart'
import Selector from './selector'

var value;
class App extends Component {

  state = {
    valueSelect: ''
  }

  handleSelect(value){
    this.setState({ valueSelect: value })
    console.log(value)
  }

  render() {
    return (
      <div className="App">
      <Selector onSelect={this.handleSelect.bind(this)} />
        <Row className="show-grid">
        <Col md={6} mdPush={6}><code><SimpleLineChart valueSelect={this.state.valueSelect} /></code></Col>
        <Col md={6} mdPull={6}><code><SimpleBarChart /></code></Col>
        </Row>
      </div>
    );
  }
}

export default App;
