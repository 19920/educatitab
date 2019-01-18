import CHECK_USER from '../types';
import axios from 'axios'
import { URL } from '../../url/url';
export function CheskUserSuccess(response){
    return {
        type: 'CHECK_USER',
        payload: response.data
    }
}
export function signIn(data) {
    return function (dispatch) {
        return axios.post(URL + 'verifyuser', {
            identifier: data.identifier,
            returnSecureToken: true
        }).then(response => {
            console.log(response.data)
            return dispatch(CheskUserSuccess(response) )
        });

    }

}