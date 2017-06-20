import axios from 'axios';

export function signUpNewUser (userData) {
    return axios({
        method: 'post',
        url: '/sende-email-confirm',
        responseType: 'json',
        data: userData
    })
}