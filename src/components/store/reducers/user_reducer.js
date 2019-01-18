import React from 'react';
import CHECK_USER from '../types';
export default function(state={},action){
    alert(action)
    switch(action.type){
        case 'CHECK_USER':
        return{...state,user:action.payload}
        break;
        default:
        return state
    }
}