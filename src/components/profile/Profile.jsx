import React from 'react'
import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileinfo/ProfileInfo";



const Profile =({profilePage, addPost, dispatch,})=>{
    return(
        <div className={s.content}>
            <ProfileInfo/>

           <MyPosts posts={profilePage.posts}
                    dispatch={dispatch}
                    newPostText={profilePage.newPostText}
           />
        </div>
    )
}

export default Profile;