import React, { Component } from 'react';

class PhoneNumberInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
        };
    }

    handlePhoneChange = (event) => {
        this.setState({
          phoneNumber: event.target.value
        });
    };

   

    handleSubmit = event => {
        event.preventDefault();
        console.log("Submitted")
    }

  
    render () {
      return (
        <div className="phone-input-form">
            <form onSubmit={this.handleSubmit}>
                <input
                    id = "start-location-input"
                    type="tel"
                    onChange={this.handlePhoneChange}
                    value = {this.state.phoneNumber}
                />
                <input type="submit" />
            </form>
        </div>
        );
      }
  }
  
  export default PhoneNumberInput;