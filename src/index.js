import React from 'react';
import './index.css';
import state, {subScribe}from "./State";
import ReactDOM from 'react-dom';
import App from './App';
import {addPost} from "./State.js";
import {BrowserRouter} from "react-router-dom";
import {updateNewPostText} from "./State";



let rerenderEntireTre = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        , document.getElementById('root'));

}

rerenderEntireTre(state);

subScribe(rerenderEntireTre);



