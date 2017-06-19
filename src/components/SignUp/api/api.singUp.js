import axios from 'axios';

export function signUpNewUser (userData) {
    return axios({
        method: 'post',
        ulr: '/signup',
        responseType: 'json',
        data: userData
    })
}