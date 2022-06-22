import React, { Component } from 'react';
import Alert from './alert';

class Alerts extends Component {

    constructor(props) {
        super(props)
    }
  
    render () {

        const alerts  = this.props.alerts.map((alert) => {
            return (
                <Alert origin={alert.origin} destination={alert.destination} brand={item.brand} time={alert.time}/>
            )
        })

        return (
            <div className="alert list">
                {alerts}
            </div>
        );
    }
     
}

export default Alerts;
