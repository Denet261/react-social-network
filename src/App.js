import React, { Component } from 'react';
import s from './App.css';
import Header from "./components/header/Header";
import Nav from "./components/navbar/nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/test/Music";
import News from "./components/test/News";




const App = () =>{
  return(
 <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Nav/>
        <div className='app-content'>
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/music'    component={Music}/>
            <Route path='/News' component={News}/>
      </div>
      </div>
 </BrowserRouter>

  );
}

export default App;
