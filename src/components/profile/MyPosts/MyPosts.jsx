import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";


const MyPosts =() =>{

 let postData = [
     {id:1, massage:'даааа', like:110 },
     {id:1, massage:'нет', like:0},
     {id:1, massage:'хз', like:10}
 ]

    return(
<div>
    My posts
    <div>
        <textarea></textarea>
        <button>Add post</button>
    </div>
    <div className={s.posts}>
       <Post massage=' даааа ' like={postData[0].like}/>
        <Post massage=' нет ' like={postData[1].like}/>
        <Post massage=' хз '  like={postData[2].like}/>

    </div>
</div>
)
}

export default MyPosts;