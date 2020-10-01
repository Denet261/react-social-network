import React from "react";
import s from "./../Dialogs.module.css";


const Massages = ({massage}) => {
    return (

        <div className={s.message}>{massage}</div>

    )
}

export default Massages;