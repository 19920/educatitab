import React from 'react';
import { combineReducers } from 'redux';
import User from './user_reducer';
import testData from './testData_reducer';
const rootReducer = combineReducers({
    User,
    testData
})
export default rootReducer;