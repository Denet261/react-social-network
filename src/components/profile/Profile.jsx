import React from 'react'
import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileinfo/ProfileInfo";



const Profile =({state, addPost})=>{
    return(
        <div className={s.content}>
            <ProfileInfo/>

           <MyPosts postData={state.postData} addPost={addPost}
           />
        </div>
    )
}

export default Profile;