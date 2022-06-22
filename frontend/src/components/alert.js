import React, { Component } from 'react';

class Alert extends Component {

  render () {
    return (
      <div className="alert-detail">
          <li>Brand: {this.props.origin}</li>
          <li>Size: {this.props.destination}</li>
          <li>Color: {this.props.time}</li>
      </div>
      );
    }
}

export default Alert;