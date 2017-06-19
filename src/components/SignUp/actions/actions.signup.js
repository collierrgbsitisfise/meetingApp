import { signUpNewUser } from './../api/api.singUp';

export function userSignUpRequest (userData) {
    return signUpNewUser(userData);
}

