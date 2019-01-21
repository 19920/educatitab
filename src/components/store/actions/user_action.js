import CHECK_USER from '../types';
import axios from 'axios'
import { URL } from '../../url/url';
export function CheskUserSuccess(response){
   
    return {
        type: 'CHECK_USER',
        payload: response.data
    }
}
export function LoginUserSuccess(response){
    return{
        type:'LOGIN_USER',
        payload:response.data
    }
}
export function checkUser(data) {
    return function (dispatch) {
        return axios.post(URL + 'verifyuser', {
            identifier: data.identifier,
            haspass:data.email
        }).then(response => {
            return dispatch(CheskUserSuccess(response) )
        });

    }

}

export function loginUser(data){
    return function(dispatch){
        return axios.post(URL + 'Login',{
            identifier:data.identifier,
            email:data.email

        }).then(response=>{
            console.log(response);
            return dispatch(LoginUserSuccess(response))
        })
    }

}