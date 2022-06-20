import React, { Component } from 'react';

class PhoneNumberInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
        };
    }

    configObj = {
        method: "POST", 
        headers: {
            "Content-Type": 'application/json',
            "Accept": "application/json",
        },
        body: JSON.stringify({
            user: user 
        })
    }

    fetchUser = () => {
        fetch(`http://localhost:4000/users/`, configObj)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        
        })
    }

    handlePhoneChange = (event) => {
        this.setState({
          phoneNumber: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.fetchUser
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