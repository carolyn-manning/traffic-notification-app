import React from 'react'
import { Navigate } from 'react-router-dom'
import CreateUser from '../components/newUser';

function CreateUserRoute() {
    const auth = !localStorage.getItem('jwt');
    return auth ? <CreateUser /> : <Navigate to="/" />;
}


export default CreateUserRoute;