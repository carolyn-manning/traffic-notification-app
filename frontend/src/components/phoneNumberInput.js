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

        const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json",
            },
            body: JSON.stringify({
                user:{phone_number: this.state.phoneNumber}
            })
        }

        fetch(`http://localhost:4000/login/`, configObj)
        .then(response => response.json())
        .then(data => {
            data.phone_number = this.state.phoneNumber;
            localStorage.setItem("jwt", data.jwt);
            console.log(data)
        
        })
    }

  
    render () {
      return (
        <div className="phone-input-form">
            <form onSubmit={this.handleSubmit}>
                <input
                    id = "tel-input"
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