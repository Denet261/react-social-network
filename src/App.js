import React, { Component } from 'react';
import s from './App.css';
import Header from "./components/header/Header";
import Nav from "./components/navbar/nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/test/Music";
import News from "./components/test/News";




const App = (props) =>{
  return(
 <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Nav/>
        <div className='app-content'>
            <Route path='/dialogs' render={ ()=>
                <Dialogs dialogsData={props.state.dialogsData}
                         massageData={props.state.massageData}
                />}/>
            <Route path='/profile' render={()=><Profile postData={props.state.postData}/>}/>
      </div>
      </div>
 </BrowserRouter>

  );
}

export default App;
