import { verifyToken } from './../api/navigationbar.api';

export function verifyTokenRequest (tokenData) {
    return verifyToken(tokenData);
}
