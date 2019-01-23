import 
{
    CHECK_USER,
    CHECK_USER_SUCCESS,
    LOGIN_USER,
    CHECKUSER_ERROR,
    LocalStorekeys
} from '../types';
import { AsyncStorage } from "react-native"
import {setAuthorizationToken,removeAuthorizationToken } from '../../profile/utils';
import jwtdecode from 'jwt-decode';
import axios from 'axios'
import { URL } from '../../url/url';

export function checkUserError(){
    return{type: 'CHECKUSER_ERROR' }

}
 

export function checkUserSuccess(response){
   
    return {
        type: 'CHECK_USER_SUCCESS',
        payload: response.data,
       
    }

}
export function checkUser(identifier) {
    return function (dispatch) {
        return axios.post(URL + 'verifyuser', {identifier}).then(response => {
            return dispatch(checkUserSuccess(response) )
        }).catch(err=>{
            dispatch(checkUserError(err))
        })

    }

}
export function LoginUserSuccess(response){
    return{
        type:'LOGIN_USER',
        payload:response
    }
}

export function loginUser(data){
    return function(dispatch){
        return axios.post(URL + 'Login',{
            identifier: data.identifier,
            password: data.password

        }).then(response=>{
            console.log(response);
            const {token} = response.data;
            AsyncStorage.setItem(LocalStorekeys.JWTTOKEN, token)
            setAuthorizationToken(token);
            let decodeToken = jwtdecode(token);
            alert(JSON.stringify(decodeToken))
            return dispatch(LoginUserSuccess(decodeToken))
        }).catch(error=>
            alert('loggin error\n'+ JSON.stringify(error))
        )
    }

}
export function LogoutUserSuccess(){
    return{type:'LOGOUT_SUCCESS'}
}

export function LogoutUser(){
    return function(dispatch){
        return new Promise((res,rej)=>{
          AsyncStorage.removeItem(LocalStorekeys.JWTTOKEN);
          removeAuthorizationToken();
            dispatch(LogoutUserSuccess())
        })
    }
}