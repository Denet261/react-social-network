import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts =({postData, addPost}) =>{

let postElements = postData
    .map( p =><Post massage={p.massage} like={p.like}/> )


    let textElement = React.createRef();



   //  const [text, setText ] = useState('')
   //  debugger
   //  let buttonClikc = () =>{
   //    let text = textElement.current.value
   //     setText(text);
   // }


   let saddPost =()=>{
       debugger;
       let text = textElement.current.value
       addPost(text)
   }

    return(
<div>
    My posts
    <div>
        {/*<h1>{text}</h1>*/}
        <textarea ref={textElement}></textarea>
        <button onClick={saddPost}>Add post</button>
    </div>
    <div className={s.posts}>
        {postElements}

    </div>
</div>
)
}

export default MyPosts;