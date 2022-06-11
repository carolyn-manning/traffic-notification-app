import './App.css';
import React, { Component } from 'react';
import LocationInput from './components/locationInput';
import Map from './components/map';

class App extends Component {

  render () {
    return(
      <div className="App"> 
        <LocationInput />
        <Map />
      </div> 
    )
  }
}


export default App;
