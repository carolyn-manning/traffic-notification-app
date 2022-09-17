import './App.css';
import React, { Component } from 'react';
// import PhoneNumberInput from './components/phoneNumberInput';
// import AlertContainer from './containers/alertContainer';
import { Routes, Route } from "react-router-dom"
import CreateUser from './components/newUser';
import PrivateAccountRoute from './routes/accountRoute';
import LogInRoute from './routes/loginRoute';


class App extends Component {

  render () {
    return(
      <Routes>
        <Route exact path="/login" element={<LogInRoute />} />
        <Route exact path="/sign_up" element={<CreateUser />} />
        <Route exact path="/" element={<PrivateAccountRoute />} />
      </Routes>
    )
  }
}

//https://developers.google.com/maps/documentation/distance-matrix/distance-matrix


export default App;
