import React from 'react';
import {CHECK_USER_SUCCESS,LOGIN_USER,LOGOUT_SUCCESS,AUTO_SIGN_IN} from '../types';
const InitialState = {
    isAuthenticated: false,
    user: ''
}
export default function(state=[InitialState.isAuthenticated,InitialState.user],action){
    switch(action.type){
        case 'CHECK_USER_SUCCESS':
        return{...state,user:action.payload}
        break;
        case 'LOGIN_USER':
        const updatedState = Object.assign({},{isAuthenticated: true,user:action.payload})
        return updatedState
        break;
        case 'LOGOUT_SUCCESS':
        return  Object.assign({},{isAuthenticated: false,user:''})
        break;
        case 'AUTO_SIGN_IN':
        const updateState = Object.assign({},{isAuthenticated: true,user:action.payload})
        return updateState
        default:
        return state
    }
}