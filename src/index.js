import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Massages from "./components/Dialogs/Massage/Massage";
import state from "./State.js";




ReactDOM.render(<App state={state} />, document.getElementById('root'));
registerServiceWorker();
