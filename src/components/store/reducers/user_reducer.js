import React from 'react';
import {CHECK_USER_SUCCESS,
    LOGIN_USER,
    LOGOUT_SUCCESS,
    AUTO_SIGN_IN,
    GET_USER_TESTS,
    COMPLETEDTESTDATA_LOAD_SUCCESS,
    PASSWORDRESET_SUCCESS
} from '../types';
const InitialState = {
    isAuthenticated: false,
    User: ''
}
export default function(state=[InitialState.isAuthenticated,InitialState.user],action){
    switch(action.type){
        case 'CHECK_USER_SUCCESS':
        return{...state,user:action.payload}
        break;
        case 'LOGIN_USER':
        const updatedState = Object.assign({},{isAuthenticated: true,User:action.payload})
        return updatedState
        break;
        case 'LOGOUT_SUCCESS':
        return  Object.assign({},{isAuthenticated: false,User:''})
        break;
        case 'AUTO_SIGN_IN':
        const updateState = Object.assign({},{isAuthenticated: true,User:action.payload})
        return updateState
        default:
        return state
    }
}