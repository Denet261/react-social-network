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
    postPage: {
        postData: [
            {id: 0, massage: 'Даааа ', like: 1110,},
            {id: 2, massage: 'Нет ', like: 0},
            {id: 3, massage: 'Хз ', like: 10}
        ]
    },
}

export let addPost =(postDataMassage)=>{
    debugger;
    let newPost ={
        id:4,
        massage:postDataMassage,
        like: 5
    };
    state.postPage.postData.push(newPost);

}


export default state;