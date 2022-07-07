import React, { Component } from 'react';

class Alert extends Component {

  render () {
    return (
      <div className="alert-detail">
          <li>{this.props.origin}</li>
          <li> {this.props.destination}</li>
          <li> {this.props.time}</li>
          <li> {this.props.phoneNumber}</li>
      </div>
      );
    }
}

export default Alert;