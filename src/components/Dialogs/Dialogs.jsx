import React from "react";
import s from "./Dialogs.module.css";
import Massages from "./Massage/Massage";
import DialogsItem from './DialogsItems/DialogsItem'
import {sendMessageCteator, updateNewMessageBodyCreator} from '../../State'


const Dialogs =({ store}) =>{

let state = store.getState().dialogsPage


    let massageElement = state.massageData.map( m =><Massages massage={m.massage}/>)

    let dialogsElement = state.dialogsData.map(d =><DialogsItem id={d.id} name={d.name}/>)
    let newMessageBody = state.newMessageBody

 let onSendMessageClikc = () =>{
    store.dispatch (sendMessageCteator())
    
 }

 let onNewMessageChange = (e) =>{
    let body = e.target.value
    store.dispatch (updateNewMessageBodyCreator(body))
}





    return(
     <div className={s.dialogs}>
         <div className={s.dialogsitems}>
             {dialogsElement}
         </div>

         <div className={s.massages}>
             <div className={s.massage}>
           <div>{massageElement}</div>
           <div>
           <div><textarea value={newMessageBody} 
           onChange={onNewMessageChange}
           placeholde='Enter your message'> </textarea></div>
           <div><button onClick={onSendMessageClikc}>Send</button></div>
           </div>
             </div>
         </div>
    </div>

)
}

export default Dialogs;