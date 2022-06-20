import './App.css';
import React, { Component } from 'react';
import LocationInput from './components/locationInput';
import Map from './components/map';
import PhoneNumberInput from './components/phoneNumberInput';

class App extends Component {

  render () {
    return(
      <div className="App"> 
        <PhoneNumberInput/>
        <LocationInput />
        <Map />
      </div> 
    )
  }
}

//https://developers.google.com/maps/documentation/distance-matrix/distance-matrix


export default App;
