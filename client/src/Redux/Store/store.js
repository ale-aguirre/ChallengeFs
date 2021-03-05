import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import itemReducer from '../item'
import categoryReducer from '../category'
import usersReducer from '../user'

const rootReducer = combineReducers({
    item: itemReducer,
    category: categoryReducer,
    user: usersReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store;
}