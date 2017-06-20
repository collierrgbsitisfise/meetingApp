import axios from 'axios';

export function signInUser (userData) {
    return axios({
        method: 'post',
        url: '/signin-user',
        responseType: 'json',
        data: userData
    });
}