import { GET_POSTS ,ADD_POSTS } from '../actions/types'

const initialState = {
    items : [],
    item : {}
}

export default function (state = initialState, action){
 switch (action.type){
     case GET_POSTS:
         return {
             ... state,
             items: action.payload
         }
     default:
         return state;

 }
}
