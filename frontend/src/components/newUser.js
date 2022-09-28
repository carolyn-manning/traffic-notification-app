import {useNavigate} from "react-router-dom";
import React, { useState } from 'react';


export default function CreateUser() {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handlePhoneChange = (event) => {
        setPhoneNumber(event.target.value)
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
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
                user:{
                    phone_number: phoneNumber,
                    password: password 
                }
            })
        }

        fetch(`http://localhost:4000/users/`, configObj)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.jwt) {
                localStorage.setItem("jwt", data.jwt);
                navigate('/') }
            else {
                console.log("Error")
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
                <br></br>
                <input
                    id = "password-input"
                    type= "password"
                    onChange={(event) => handlePasswordChange(event)}
                    value = {password}
                />
                <br></br>
                <input type="submit" />
            </form>
        </div>
    );
  }