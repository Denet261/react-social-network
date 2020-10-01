import React, { useState } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts =({postData}) =>{

let postElements = postData
    .map( p =><Post massage={p.massage} like={p.like}/> )


    let textElement = React.createRef();



    const [text, setText] = useState('8')
    let buttonClikc = () =>{
      let text = textElement.current.value
       setText(text);

   }


   // let buttonClikc =()=>{
   //     let text = textElement.current.value
   //     alert(text)
   // }



    return(
<div>
    My posts
    <div>
        <h1>{text}</h1>
        <textarea ref={textElement}></textarea>
        <button onClick={buttonClikc}>Add post</button>
    </div>
    <div className={s.posts}>
        {postElements}

    </div>
</div>
)
}

export default MyPosts;