import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./State.js";
import {BrowserRouter} from "react-router-dom";
import {updateNewPostText} from "./State";



export let rerenderEntireTre = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        , document.getElementById('root'));

}


