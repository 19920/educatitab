import React from 'react';
import { createStore,compose,applyMiddleware } from 'redux';
import promiseMiddleware from  'redux-promise';
import rootReducer from './reducers/index';
let reduxCompose = compose;

if(__DEV__){
    reduxCompose =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const ConfigureStore = ()=>{
    return createStore(rootReducer,reduxCompose(applyMiddleware(promiseMiddleware)))
}
export default ConfigureStore;