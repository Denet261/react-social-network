import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Massages from "./components/Dialogs/Massage/Massage";
import state from "./State.js";
import {addPost} from "./State.js";
import {BrowserRouter} from "react-router-dom";




ReactDOM.render(
    <BrowserRouter>
    <App state={state} addPost={addPost} />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
