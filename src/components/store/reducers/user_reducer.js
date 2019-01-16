import React from 'react';
import LOGIN_USER from '../types';
export default function(state={},action){
    switch(action.type){
        case 'LOGIN_USER':
        return{...state,user:action.payload}
        break;
        default:
        return state
    }
}