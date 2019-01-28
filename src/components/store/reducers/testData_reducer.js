import React from 'react';
import {COMPLETEDTESTDATA_LOAD_SUCCESS} from '../types';
export const InitialState={
 testData:{
     completedTests:[]
 }
} 

export default function(state=InitialState.testData,action){
    switch(action.type){
        case COMPLETEDTESTDATA_LOAD_SUCCESS:
        return Object.assign({}, state, { completedTests: action.payload });
        break;
        default:
        return state
    }
}