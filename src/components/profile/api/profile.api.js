import axios from 'axios';

export function getUserInfo () {
    return axios({
        method: 'get',
        url: '/get-user-info',
        responseType: 'json',
        headers: {
            token: localStorage.getItem('token')
        }
    })
}