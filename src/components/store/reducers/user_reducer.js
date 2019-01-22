import React from 'react';
import {CHECK_USER_SUCCESS,LOGIN_USER,LOGOUT_SUCCESS} from '../types';
export default function(state={},action){
    switch(action.type){
        case 'CHECK_USER_SUCCESS':
        return{...state,user:action.payload}
        break;
        case 'LOGIN_USER':
        return{...state,user:action.payload}
        break;
        case 'LOGOUT_SUCCESS':
        return{...state,user:action.payload}
        default:
        return state
    }
}