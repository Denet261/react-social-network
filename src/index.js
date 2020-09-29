import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Massages from "./components/Dialogs/Massage/Massage";
let  state = {
dialogsData : [
    {id:1, name:'Denis'},
    {id:2, name:'Dima'},
    {id:3, name:'Name 1'},
],

massageData : [
    {id:1, massage:'Привет'},
    {id:2, massage:'Пока'},
    {id:3, massage:'Да, да'}
],
    postData : [
        {id:1, massage:'Даааа ', like:1110,},
        {id:1, massage:'Нет ', like:0},
        {id:1, massage:'Хз ', like:10}
    ]
}


ReactDOM.render(<App state={state} />, document.getElementById('root'));
registerServiceWorker();
