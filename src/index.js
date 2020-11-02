import React from 'react';
import './index.css';
import store from "./State";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";



let rerenderEntireTre = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 store={store}/>
        </BrowserRouter>
        , document.getElementById('root'));

}

rerenderEntireTre(store.getState());

store.subScribe(rerenderEntireTre);



