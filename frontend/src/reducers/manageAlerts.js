export default function manageAlerts(
    state = {
        alerts: [],
        requesting: false
      },
      action
    ) {
        const alert = action.alert;
        switch (action.type) {
            case "START_ADDING_ALERT_REQUEST":
                return {
                    ...state,
                    alerts: [...state.alerts],
                    requesting: true,
                };

            case "ADD_ALERT":
                return {
                    alerts: [...state.alerts, alert],
                    requesting: false,
                }; 
                    
            case 'DELETE_ALERT':
                const alerts = state.alerts.filter(alert => alert.id !== action.id);
                return { ...state, alerts}

            case "START_ADDING_ALERTS_REQUEST":
                return {
                    ...state,
                    alerts: [...state.alerts],
                    requesting: true,
                };
          
            case "ADD_ALERTS":
                return {
                    ...state,
                    alerts: action.alerts,
                    requesting: false,
                }; 

        default:
            return state;
    }
}
