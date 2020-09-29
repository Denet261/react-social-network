import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";


const MyPosts =(props) =>{

let postElements = props.postData
    .map( p =><Post massage={p.massage} like={p.like}/> )

    return(
<div>
    My posts
    <div>
        <textarea></textarea>
        <button>Add post</button>
    </div>
    <div className={s.posts}>
        {postElements}

    </div>
</div>
)
}

export default MyPosts;