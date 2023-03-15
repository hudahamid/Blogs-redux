export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE= 'GET_POSTS_FAILURE'

export const getPosts =   ()=>({
    type : GET_POSTS,
})

export const getPostSuccess =  (posts) =>({
    type:GET_POSTS_SUCCESS,
    payload:posts
})

export const getPostFailure=  ()=>({
    type:GET_POSTS_FAILURE,
})

// Combine them all in an asynchronous thunk
export function fetchPosts(){
    return async(dispatch) => {
        
        dispatch(getPosts())
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data =await response.json()
            dispatch(getPostSuccess(data))
        }catch(error){
            dispatch(getPostFailure())
        }
    }

}

// redux needs action,reducer , dispatch ,connect ,store
// action : send data from app to redux store
// action type : creating functions to return action it is also done in action file
// dispatch : accept objects that update redux state "actions" it is also done in action file and needed in post page also
// reducer contain state and action also it has switch statement that will go through all action cases
// connect: connect react and redux state as probs to react
