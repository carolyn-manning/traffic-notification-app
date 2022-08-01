import React, { Component } from 'react';

class LocationInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startLocation: '',
            destinationLocation: '',
            time: ''
        };
    }

    handleStartChange = (event) => {
        this.setState({
          startLocation: event.target.value
        });
    };

    handleDestinationChange = (event) => {
        this.setState({
          destinationLocation: event.target.value
        });
    };

    handleTimeChange = (event) => {
        this.setState({
          time: event.target.value
        });
    };

    createNewAlert = () => {
        const formData = new FormData()
        formData.append('origin', this.state.startLocation)
        formData.append('destination', this.state.destinationLocation)
        formData.append('time', this.state.time)

        const configObj = {
            method: "POST", 
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            },
            body: formData
           
        }

        fetch(`http://localhost:4000/alerts/`, configObj)
        .then(response => response.json())
        .then(data => { console.log(data)
            alert.origin = data.startLocation
            alert.destination = data.destinationLocation
            alert.time = data.time
        })
    }


    handleSubmit = event => {
        event.preventDefault();
        console.log("Submitted")
        this.createNewAlert()
       
       
        // create redux strore - input locations
        // this.setState({
        //     startLocation: '',
        //     destinationLocation: '',
        //     time: ''
        // });

    }

  
    render () {
      return (
        <div className="locations-input-form">
            <form onSubmit={this.handleSubmit}>
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
        </div>
        );
      }
  }
  
  export default LocationInput;