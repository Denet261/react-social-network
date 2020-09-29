import s from "./Dialogs.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import Massages from "./Massage/Massage";
import DialogsItem from './DialogsItems/DialogsItem'



const Dialogs =(props) =>{




    let massageElement = props.massageData.map( m =><Massages massage={m.massage}/>)

    let dialogsElement = props.dialogsData.map(d =><DialogsItem id={d.id} name={d.name}/>)




    return(
     <div className={s.dialogs}>
         <div className={s.dialogsitems}>
             {dialogsElement}
         </div>
<div className={s.massages}>
    {massageElement}
</div>
    </div>

)
}

export default Dialogs;