import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";


const MyPosts =() =>{
    return(


<div>
    My posts
    <div>
        <textarea></textarea>
        <button>Add post</button>
    </div>
    <div className={s.posts}>
       <Post name=' даааа '/>
        <Post name=' нет '/>
        <Post name=' хз '/>

    </div>
</div>
)
}

export default MyPosts;