import './App.css';
import React, { Component } from 'react';
import LocationInput from './components/locationInput';

class App extends Component {

  render () {
    return(
      <div className="App"> 
        <LocationInput />
      </div> 
    )
  }
}


export default App;
