import s from "./Post.module.css";
import React from "react";
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons'


const Post =(props) =>{
    return(
 <div>

        <div className={s.item}>
            <img src='https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'/>
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