import React, { Component } from 'react';
import Alerts from '../components/alerts';
import LocationInput from '../components/locationInput';

class AlertContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alerts: []
        };
    }

    fetchAlerts = () => {

        const configObj = {
            method: "GET", 
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json",
            },
            body: JSON.stringify({
                alerts: this.state.alerts
                })
        }

        fetch(`http://localhost:4000/alerts/`, configObj)
        .then(response => response.json())
        .then(data => {
           console.log(data)
        })   
    }

    componentDidMount() {
        this.fetchAlerts()
    }

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