import { getUserInfo } from './../api/profile.api';

export function getUserInfoRequest () {
    return getUserInfo();
}
