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

export function uploadProfileAvatar (FileData) {
    console.log('it is TYPE');
    console.log(FileData);
    return axios({
        method: 'post',
        url: '/upload-avatar',
        data: FileData
    })
}