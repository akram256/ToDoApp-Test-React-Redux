import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'

const initialState = {};
const middlware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middlware))

export default store ;
