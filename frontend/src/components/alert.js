import React, { Component } from 'react';

class Alert extends Component {

  constructor(props) {
    super(props);
    this.state = {
        clicked: false, 
        origin: "", 
        destination: "",
        time: 0
    };
}

  handleOnDeleteClick = event => {
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

  handleOnSaveClick = event => {
    const configObj = {
      method: "PATCH", 
      headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
      }
    }
  
    fetch(`http://localhost:4000/alerts/${this.props.id}`, configObj) 
    .then(response => response.json())
    .then(data => { 
      console.log(data)
    })

    this.setState({
      clicked: !this.state.clicked
    });
  }

  handleOnEditClick = event => {
    this.setState({
      clicked: !this.state.clicked
    });
  }
    
  

  render () {
    if(this.state.clicked === true){
      return (
        <form onSubmit={this.handleOnSaveClick}>
            <input
                id = "start-location-input"
                type="text"
                onChange={this.handleStartChange}
                value = {this.state.startLocation}
            />
             <input
                id = "destination-location-input"
                type="text"
                onChange={this.handleDestinationChange}
                value = {this.state.destinationLocation}
            />
            <input
                id = "time-input"
                type="text"
                onChange={this.handleTimeChange}
                value = {this.state.time}
            />
            <input type="submit" />
        </form>
        );
    } else {
    return (
      <div className="alert-detail">
          <li>{this.props.origin}</li>
          <li> {this.props.destination}</li>
          <li> {this.props.time}</li>
          <button onClick={this.handleOnDeleteClick}>DELETE</button>
          <button onClick={this.handleOnEditClick}>Edit</button>
          <br></br>
      </div>
      );
    }
}}

export default Alert;