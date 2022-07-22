import React, { Component } from 'react';

class Alert extends Component {

  handleOnClick = event => {
    const configObj = {
      method: "DELETE", 
      headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
      }
    }
  
    fetch(`http://localhost:4000/alerts/${this.props.id}`, configObj) 
    .then(response => response.json())
  }

  render () {
    return (
      <div className="alert-detail">
          <li>{this.props.origin}</li>
          <li> {this.props.destination}</li>
          <li> {this.props.time}</li>
          <button onClick={this.handleOnClick}>DELETE</button>
          <br></br>
      </div>
      );
    }
}

export default Alert;