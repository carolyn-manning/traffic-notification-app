import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {combineReducers} from 'redux'
import { createStore, applyMiddleware, compose } from "redux"; 
import { Provider } from "react-redux";
import manageAlerts from './reducers/manageAlerts';
import thunk from "redux-thunk";
// import manageLogIn from './reducers/manageLogIn';

const store = createStore(
  combineReducers({manageAlerts}),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<Provider store={store}>
    <Router>
      <div>
        <App />
      </div>
    </Router>
 // </Provider>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
