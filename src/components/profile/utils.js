import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const setAuthorizationToken = (token) =>{
    if(token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
}
export const removeAuthorizationToken = () =>{
    delete axios.defaults.headers.common['Authorization'];
}

export const getTokens =(cb) =>{
    AsyncStorage.getItem('@EducateIt@sub').
    then(value=>{
        cb(value);
    })

}
export const setTokens =(value,cb) =>{
    const DateNow = new Date();
    const expiration = DateNow.getTime() + (10800*1000)
    AsyncStorage.setItem('@EducateIt@sub',value.sub).then(response=>{
        cb();
    })


}

