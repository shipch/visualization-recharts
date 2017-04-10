import React, { Component } from 'react';
import { ButtonToolbar , DropdownButton , MenuItem } from 'react-bootstrap';
import SimpleBarChart from './SimpleBarchart'



function handleChange(e) {
  var options = e.target.options;
  var value = [];
  for (var i = 0, l = options.length; i < l; i++) {
    if (options[i].selected) {
      value.push(options[i].value);
    }
  }
  this.props.someCallback(value);
}


const Selector = React.createClass({
  propTypes: {
    onSelect: React.PropTypes.func.isRequired
  },
  render(){
    return(
      <div>
        <DropdownButton title="Default button" id="dropdown-size-medium" onSelect={this.props.onSelect}  >
          <MenuItem eventKey="AUS">aa</MenuItem>
          <MenuItem eventKey="ABW">mm</MenuItem>
          <MenuItem eventKey="4">ss</MenuItem>
        </DropdownButton>
      </div>
    );
  }
});


export default Selector;
