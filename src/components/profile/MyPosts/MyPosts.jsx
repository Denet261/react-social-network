import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import "antd/dist/antd.css";
import { Button } from "antd";
import {updateNewPostTextActionCreator, addPostActionCreator } from '../../../State'







const MyPosts =({ posts, dispatch,newPostText}) =>{

let postElements = posts
    .map( p =><Post massage={p.massage} like={p.like}/> )


    let textElement = React.createRef();


   let saddPost =()=>{
       debugger
       dispatch(addPostActionCreator({type: 'ADD-POST'}))

   }

   let onPostChange =() =>{
       let text = textElement.current.value
       let action = {type:'UPDATE-NEW-POST-TEXT', newText:text}
       dispatch(action)

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