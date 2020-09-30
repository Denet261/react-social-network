import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";


const MyPosts =(props) =>{
debugger;
let postElements = props.postData
    .map( p =><Post massage={p.massage} like={p.like}/> )

    let textElement = React.createRef();

   let buttonClikc = () =>{
      let text = textElement.current.value
       alert(text)
   }

    return(
<div>
    My posts
    <div>
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