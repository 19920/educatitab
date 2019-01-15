/** @format */
import React from 'react';
import {AppRegistry} from 'react-native';
import ConfigureStore from'./src/components/store/config';
import { Provider } from 'react-redux';
import App from './App';
import {name as appName} from './app.json';

const store = ConfigureStore();
const EducateIt = () =>{
    return(
        <Provider store ={store}>
        <App />
    </Provider>
    )
   

}
AppRegistry.registerComponent(appName, () => EducateIt);
