import axios from 'axios';

export function addNewUser (userData) {
    return axios({
        method: 'post',
        url: '/create-acc',
        responseType: 'json',
        data: userData
    })
}