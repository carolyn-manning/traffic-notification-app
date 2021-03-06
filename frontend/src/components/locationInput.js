import React, { Component } from 'react';

class LocationInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startLocation: '',
            destinationLocation: ''
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

    handleSubmit = event => {
        event.preventDefault();
        console.log("Submitted")
        // create redux strore - input locations
        this.setState({
            startLocation: '',
            destinationLocation: ''
        });

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
                <input type="submit" />
            </form>
        </div>
        );
      }
  }
  
  export default LocationInput;