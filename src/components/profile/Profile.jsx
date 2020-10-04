import React from 'react'
import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./profileinfo/ProfileInfo";



const Profile =({profilePage, addPost, newPostText,updateNewPostText})=>{
    return(
        <div className={s.content}>
            <ProfileInfo/>

           <MyPosts posts={profilePage.posts}
                    updateNewPostText={updateNewPostText}
                    newPostText={profilePage.newPostText}
                    addPost={addPost}
           />
        </div>
    )
}

export default Profile;