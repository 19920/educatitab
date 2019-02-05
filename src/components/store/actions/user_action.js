import 
{
    CHECK_USER,
    CHECK_USER_SUCCESS,
    LOGIN_USER,
    CHECKUSER_ERROR,
    AUTO_SIGN_IN,
    GET_USER_TESTS,
    COMPLETEDTESTDATA_LOAD_SUCCESS,
    PASSWORDRESET_SUCCESS,
    GETPASSRESETTOKEN_SUCCESS,
    LocalStorekeys
} from '../types';
import { AsyncStorage } from "react-native"
import {setAuthorizationToken,removeAuthorizationToken } from '../../profile/utils';
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import { URL,TESTDATAURL } from '../../url/url';




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
            //console.log(response.data);
            const {token} = response.data;
       
            AsyncStorage.setItem(LocalStorekeys.JWTTOKEN, token).then(()=>{
                
                
                 
            setAuthorizationToken(token);
            let decodeToken = jwtDecode(token);
            //console.log(decodeToken)
            return dispatch(LoginUserSuccess(decodeToken))

            })
          
        }).catch(error=>
           console.log('loggin error\n'+ JSON.stringify(error))
        )
    }

}


export function AutoSignSuccess(response){
    return{
        type:'AUTO_SIGN_IN',
        payload:response
    }
}
export function autoSignIn(refToken){
    return function(dispatch){
        return axios.post(URL + 'GetRefreshToken',{
            data: 'grant_type=refresh_token&refresh_token=' +refToken,
            headers:{'Content-Type':'application/x-www-urlencoded'}
        }).then(response=>{
            alert(response.data)
            return dispatch(AutoSignSuccess(response.data))  
        }).catch(err=>{
            return false
        })
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


 export const IRestPasswordData = {
    token:''
}
export function resetPasswordSuccess(IRestPasswordData){
    return{
        type:PASSWORDRESET_SUCCESS,
        payload:{IRestPasswordData}
    }
}

export function resetPassword(data){
    return function(dispatch){
        return axios.post(URL + 'resetpasswordaction',{
            identifier:data.identifier,
            pin:data.pin,
            newPassword:data.newPassword,
            confirmPassword:data.confirmPassword
        }).then((res)=>{
            const token = res.data.token;
            AsyncStorage.setItem(LocalStorekeys.JWTTOKEN,token);
            setAuthorizationToken(token);
            dispatch(LoginUserSuccess);
            return dispatch(resetPasswordSuccess(res.data));
        }).catch(err =>{
            console.log(err)
        })
    }

}
export const IResetPassTokenData ={
    email:'',
    smsPhone:''
}



export const IgenerateToken = {
    identifier:'',
    token:''
}
export function getResetPassTokenSuccess(data){
    return{
        type:GETPASSRESETTOKEN_SUCCESS,
        payload:{data}
    }
}
export function getRestToken(data){
    return function(dispatch){
        return axios.post(TESTDATAURL + 'getresetpasswordtoken',{data}).then((res)=>{
           // console.log(res)
            return dispatch(getResetPassTokenSuccess(res.data));
        }).catch(err=>{
            console.log(err);
        })
    }
}