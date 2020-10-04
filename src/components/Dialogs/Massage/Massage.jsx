import React from "react";
import s from "./../Dialogs.module.css";


const Massages = ({massage}) => {
    return (
        <div>
        <div className={s.message}>{massage}</div>
        </div>
    )
}

export default Massages;