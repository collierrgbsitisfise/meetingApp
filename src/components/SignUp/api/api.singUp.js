import axios from 'axios';

export function signUpNewUser (userData) {
    return axios({
        method: 'post',
        url: '/signup',
        responseType: 'json',
        data: userData
    })
}