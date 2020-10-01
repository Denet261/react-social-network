import React from 'react';
import s from './App.css';
import Header from "./components/header/Header";
import Nav from "./components/navbar/nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


const App = ({state}) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-content'>
                <Route path='/profile' render={() => <Profile state={state.postPage}/>}/>
                <Route path='/dialogs'
                       render={() =>
                           <Dialogs state={state.dialogsPage}
                           />}/>

            </div>
        </div>


    );
}

export default App;
