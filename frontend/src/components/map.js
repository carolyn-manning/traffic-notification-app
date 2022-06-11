import React, { Component } from 'react';

class Map extends Component {
  
  render () {
    return (
      <div className="locations-input-form">
        <iframe src="https://embed.waze.com/iframe?zoom=12&lat=45.6906304&lon=-120.810983"
        width="300" height="400"></iframe>
      </div>
      );
    }
}
  
export default Map;

