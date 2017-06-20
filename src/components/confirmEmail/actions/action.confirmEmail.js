import { addNewUser } from './../api/api.confirmEmail';

export function addNewUserRequest (userData) {
    return addNewUser(userData);
}