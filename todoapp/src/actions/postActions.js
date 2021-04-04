import { GET_POSTS ,ADD_POST } from './types'

export const getposts = () => dispatch => { 
         fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then (data => dispatch({
            type :GET_POSTS,
            payload:data
        })
        );
    
};

export const addpost = (post_data) => dispatch => { 
    console.log('he')
    fetch ('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        header: {
            'content-type': 'application/json'
        },
        body : JSON.stringify(post_data)
     
    })
        .then(res => res.json())
        .then(data => dispatch({
            type :ADD_POST,
            payload:data
        }))


};