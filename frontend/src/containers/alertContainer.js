import React, { Component } from 'react';
import Alerts from '../components/alerts';
import LocationInput from '../components/locationInput';

class AlertContainer extends Component {

    render() {

        const test_alerts = [{origin: "1", destination: "1", time: "1"}, {origin: "2", destination: "2", time: "2"}]
        return (
            <div>
                <LocationInput />
                <Alerts 
                    alerts={test_alerts}
                />
            </div>
        );
    }
}


export default AlertContainer;