import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import "antd/dist/antd.css";
import { Button } from "antd";












const MyPosts =({ posts, addPost,newPostText,updateNewPostText}) =>{

let postElements = posts
    .map( p =><Post massage={p.massage} like={p.like}/> )


    let textElement = React.createRef();


   let saddPost =()=>{
       addPost()

   }

   let onPostChange =() =>{
       let text = textElement.current.value
       updateNewPostText(text)
   }

    return(
<div>
    My posts
    <div>
        <textarea onChange={onPostChange} ref={textElement} value={newPostText}/><div>
        <Button onClick={saddPost} type="primary" danger>Add post</Button>
    </div>
    </div>
    <div className={s.posts}>
        {postElements}

    </div>
</div>
)
}

export default MyPosts;