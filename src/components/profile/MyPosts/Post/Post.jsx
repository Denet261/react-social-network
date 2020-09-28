import s from "./Post.module.css";
import React from "react";


const Post =(props) =>{
    return(
 <div>

        <div className={s.item}>
            <img src='https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'/>
            name:{props.name}
            <span>Like</span>
        </div>

    </div>

)
}

export default Post;