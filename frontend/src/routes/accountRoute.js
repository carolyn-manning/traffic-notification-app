import React from 'react'
import { Navigate } from 'react-router-dom'
import AlertContainer from '../containers/alertContainer';

function PrivateAccountRoute() {
    const auth = localStorage.getItem('jwt');
    return auth ? <AlertContainer /> : <Navigate to="/login" />;
}

export default PrivateAccountRoute
