import React, { Component } from 'react';
import Alert from './alert';

class Alerts extends Component {
  
    render () {

        const alerts  = this.props.alerts.map((alert) => {
            return (
                <Alert key={alert.id} origin={alert.origin} destination={alert.destination} time={alert.time} id={alert.id}/>
            )
        })

        return (
            <div className="alert-list">
                {alerts}
            </div>
        );
    }
     
}

export default Alerts;
