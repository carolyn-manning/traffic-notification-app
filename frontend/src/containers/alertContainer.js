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
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
            },
        }

        fetch(`http://localhost:4000/alerts/`, configObj)
        .then(response => response.json())
        .then(data => {
           this.setState({alerts: data})
        })   
    }

    componentDidMount() {
        this.fetchAlerts()
    }

    render() {
        return (
            <div>
                <LocationInput />
                <Alerts 
                    alerts={this.state.alerts}
                />
            </div>
        );
    }
}


export default AlertContainer;