import React from 'react'
import { Navigate } from 'react-router-dom'
import PhoneNumberInput from '../components/phoneNumberInput';

function LogInRoute() {
    const auth = !localStorage.getItem('jwt');
    return auth ? <PhoneNumberInput /> : <Navigate to="/" />;
}


export default LogInRoute;