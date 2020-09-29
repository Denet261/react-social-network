import s from "./../Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";



const Massages =(props)=>{
    return(

            <div className={s.message}>{props.massage}</div>

    )
}



export default Massages;