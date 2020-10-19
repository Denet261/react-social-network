

let store ={
    _state: {
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Denis'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Name 1'},
            ],

            massageData: [
                {id: 1, massage: 'Привет'},
                {id: 2, massage: 'Пока'},
                {id: 3, massage: 'Да, да'}
            ],
        },
        profilePage: {
            posts: [
                {id: 0, massage: 'Даааа ', like: 1110,},
                {id: 2, massage: 'Нет ', like: 0},
                {id: 3, massage: 'Хз ', like: 10}
            ],
            newPostText:'323331'

        },
    },
    _callSubscriber(){
        console.log('state')
    },

    getState(){
       return this._state;
    },
    subScribe  (observer)  {
        this._callSubscriber = observer;

    },

    addPost (){

    },
    updateNewPostText(newText){

    },
    dispatch(action){
        debugger
     if(action.type ==='ADD-POST'){
         let newPost ={
             id:4,
             massage:this._state.profilePage.newPostText,
             like: 5
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText=('')
         this._callSubscriber(this._state);
     } else if(action.type ==='UPDATE-NEW-POST-TEXT'){
         this._state.profilePage.newPostText = action.newText
         this._callSubscriber(this._state);
     }
    }
}

export const addPostActionCreator = () => ({type:'ADD-POST'})


export const updateNewPostTextActionCreator = (text) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', newText: text})




export default store;