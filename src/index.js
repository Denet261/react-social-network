import React from 'react';
import './index.css';
import store from "./State";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";



let rerenderEntireTre = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>
        , document.getElementById('root'));

}

rerenderEntireTre(store.getState());

store.subScribe(rerenderEntireTre);



