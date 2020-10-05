let rerenderEntireTre = () =>{
    console.log('state')
}

let  state = {
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
}

window.state = state;

export const addPost =()=>{
    let newPost ={
        id:4,
        massage:state.profilePage.newPostText,
        like: 5
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText=('')
    rerenderEntireTre(state);
}

export const updateNewPostText =(newText)=>{

    state.profilePage.newPostText = newText

    rerenderEntireTre(state);
}

export let subScribe = (observer) => {
    rerenderEntireTre = observer;


}

export default state;