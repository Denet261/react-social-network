import React from "react";
import s from "./Post.module.css";
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons'
import avaPost from './avaPost.jpg'

const Post =(props) =>{
    return(
 <div>

        <div className={s.item}>
            <img src={avaPost}/>
            <div>
                Name:{props.massage}
                </div>

            <div>
            <span>Like: {props.like} <HeartTwoTone twoToneColor="#15a813" /></span>
        </div>
        </div>

    </div>

)
}

export default Post;