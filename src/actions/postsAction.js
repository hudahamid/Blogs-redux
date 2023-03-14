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