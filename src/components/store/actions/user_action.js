import 
{
    CHECK_USER,
    CHECK_USER_SUCCESS,
    LOGIN_USER,
    CHECKUSER_ERROR
} from '../types';
import axios from 'axios'
import { URL } from '../../url/url';

export function checkUserError(){
    return{type: 'CHECKUSER_ERROR' }

}
 
export function LoginUserSuccess(response){
    return{
        type:'LOGIN_USER',
        payload:response.data
    }
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

export function loginUser(data){
    return function(dispatch){
        return axios.post(URL + 'Login',{
            identifier: data.identifier,
            password: data.password

        }).then(response=>{
            console.log(response);
            return dispatch(LoginUserSuccess(response))
        })
    }

}