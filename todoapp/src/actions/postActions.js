import { GET_POSTS ,ADD_POSTS } from './types'

export const getposts = () => dispatch => { 
         fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then (data => dispatch({
            type :GET_POSTS,
            payload:data
        })
        );
    
};