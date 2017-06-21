import axios from 'axios';

export function verifyToken (tokenData) {
    return axios({
        method: 'post',
        url: '/verify-token',
        responseType: 'json',
        data: tokenData
    });
}