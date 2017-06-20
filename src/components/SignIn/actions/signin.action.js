import { signInUser } from './../api/signin.api';

export function userSignInRequest (userData) {
    return signInUser(userData);
}
