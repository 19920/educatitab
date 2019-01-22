import axios from 'axios';
export const setAuthorizationToken = (token) =>{
    if(token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
}
export const removeAuthorizationToken = () =>{
    delete axios.defaults.headers.common['Authorization'];
}