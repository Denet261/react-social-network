import React from "react";
import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";
import ava from './ava.png'

const DialogsItem = ({id, name}) => {
    return (

        <div className={s.item}>
            <img src={ava} alt='ava'/>
            <NavLink to={'/dialogs/' + id}>{name}</NavLink>
        </div>
    )
}

export default DialogsItem;