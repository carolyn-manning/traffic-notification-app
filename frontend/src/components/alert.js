import React, { Component } from 'react';

class Alert extends Component {

  render () {
    return (
      <div className="alert-detail">
          <li>{this.props.origin}</li>
          <li> {this.props.destination}</li>
          <li> {this.props.time}</li>
          <br></br>
      </div>
      );
    }
}

export default Alert;