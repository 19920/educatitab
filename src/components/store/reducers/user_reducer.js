import React from 'react';
import {CHECK_USER,LOGIN_USER } from '../types';
export default function(state={},action){
    console.log(state)
    switch(action.type){
        case 'CHECK_USER':
        return{...state,user:action.payload}
        break;
        case 'LOGIN_USER':
        return{...state,user:action.payload}
        break;
        default:
        return state
    }
}