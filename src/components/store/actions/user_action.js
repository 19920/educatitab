import LOGIN_USER from '../types';
import  axios from 'axios'
import {URL} from '../../url/url';

export function signIn(data){
    const request = axios({
        method:'POST',
        url:URL,
        data:{
            personnummer: data.personnummer,
            returnSecureToken:true

        },
        headers:{
            'Content-Type':'application/json'
        }
    }).then(response =>{
        console.log(response.data)
        return response.data
    });
    return{
        Type:LOGIN_USER,
        payload:request
    }
}