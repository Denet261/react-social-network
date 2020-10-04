import React from "react";
import s from "./Dialogs.module.css";
import Massages from "./Massage/Massage";
import DialogsItem from './DialogsItems/DialogsItem'



const Dialogs =({state}) =>{




    let massageElement = state.massageData.map( m =><Massages massage={m.massage}/>)

    let dialogsElement = state.dialogsData.map(d =><DialogsItem id={d.id} name={d.name}/>)




    return(
     <div className={s.dialogs}>
         <div className={s.dialogsitems}>
             {dialogsElement}
         </div>

         <div className={s.massages}>
             <div className={s.massage}>
           {massageElement}

             </div>
         </div>
    </div>

)
}

export default Dialogs;