import { getUserInfo , uploadProfileAvatar } from './../api/profile.api';

export function getUserInfoRequest () {
    return getUserInfo();
}

export function uploadProfileAvatarRequest (data) {
    console.log('it is data in action!!!');
    console.log(data);
    return uploadProfileAvatar(data);
}