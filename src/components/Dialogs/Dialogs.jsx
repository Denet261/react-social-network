import s from "./Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";


const DialogsItems = (props) =>{
    return(

            <div className={s.item}>
                <NavLink to={'/dialogs/' + props.id} >{props.name}</NavLink>
            </div>
    )
}

const Massages =(props)=>{
    return(

            <div className={s.message}>{props.massage}</div>

    )
}


const Dialogs =(props) =>{
    return(
     <div className={s.dialogs}>
         <div className={s.dialogsitems}>
        <DialogsItems id='1' name='Denis'/>
         <DialogsItems id='2' name='Denis'/>
         <DialogsItems id='3' name='Denis'/>
         </div>
<div className={s.massages}>
         <Massages massage='Привет'/>
         <Massages massage='Пока'/>
         <Massages massage='Да, да'/>
</div>
    </div>

)
}

export default Dialogs;