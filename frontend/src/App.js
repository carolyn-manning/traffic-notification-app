import './App.css';
import React, { Component } from 'react';
import PhoneNumberInput from './components/phoneNumberInput';
import AlertContainer from './containers/alertContainer';

class App extends Component {

  render () {
    return(
      <div className="App"> 
        <PhoneNumberInput/>
        <AlertContainer/>
      </div> 
    )
  }
}

//https://developers.google.com/maps/documentation/distance-matrix/distance-matrix


export default App;
