import {useNavigate} from "react-router-dom";
import React, { useState } from 'react';


export default function PhoneNumberInput() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate()

    const handlePhoneChange = (event) => {
        setPhoneNumber(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();

        const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json",
            },
            body: JSON.stringify({
                user:{phone_number: phoneNumber}
            })
        }

        fetch(`http://localhost:4000/login/`, configObj)
        .then(response => response.json())
        .then(data => {
            if(data.jwt) {
                localStorage.setItem("jwt", data.jwt);
                console.log(data)
                navigate('/') }
            else {
                console.log("Number not found")
                }
        
        })
    }

    return (
        <div className="phone-input-form">
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    id = "tel-input"
                    type="tel"
                    onChange={(event) => handlePhoneChange(event)}
                    value = {phoneNumber}
                />
                <input type="submit" />
            </form>
        </div>
    );
  }
  