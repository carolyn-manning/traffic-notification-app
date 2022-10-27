export function fetchAlerts() {
    return (dispatch) => {
      dispatch({ type: "START_ADDING_ALERTS_REQUEST" });
      fetch('http://localhost:4000/alerts', {headers: {Authorization: `Bearer ${localStorage.getItem("jwt")}`}})
        .then((response) => response.json())
        .then((alerts) => {
          dispatch({ type: "ADD_ALERTS", alerts })});
    };
  }
  
  export function saveAlertToDB( alert ) {
    const formData = new FormData()
    formData.append('origin', alert.origin)
    formData.append('destination', alert.destination)
    formData.append('duration', alert.duration)
  
    const configObj = {
            method: "POST", 
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            },
            body: formData
        }
  
        return (dispatch) => {
          dispatch({ type: "START_ADDING_ALERT_REQUEST" }); 
          fetch(`http://localhost:4000/alerts/`, configObj)
            .then(response => response.json())
            .then((data) => {
              alert.id = data.id;
              dispatch({ type: "ADD_ALERT", alert })
  
        })
      }
  }
  
  export function deleteAlert(id) {
    const configObj = {
      method: "DELETE", 
      headers: {
        "Content-Type": 'application/json',
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
      }
    }
    
    return (dispatch) => {
      fetch(`http://localhost:4000/alerts/${id}`, configObj) 
      .then(response => response.json())
      .then((data) =>  dispatch({ type: "DELETE_ALERT", id}))
    }
        
  }
  