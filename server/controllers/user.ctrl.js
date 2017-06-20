import { User } from './../models/user.model';
import {sendSignUpToken} from './../services/mailer.service';
import base64 from 'base-64';

/**
 * singUp new User Handler
 *@param {Object},
 *@param {Fucntion}
 */
module.exports.signUpNewUserHandler = function signUpNewUserHandler (req, res) {
    console.log('I am in sign Up');
    VerifyIfExistAlready(req.body)
        .then(data => {
            sendSignUpToken('SignUp on meetings -_o',data.email,'This is token muitherfucker')
                .then(data => {
                    res.status(200).send(data);
                })
                .catch(err => {
                    res.status(403).send(err);
                })
        })
        .catch(err => {
            res.status(403).send(err);
        });
} 

/**
 *Verify if user with 'this' name or email already exists, referene to {signUpNewUserHandler}
 *@param {Object}
 *@return {Promise}
 */
const VerifyIfExistAlready = (body) => {
    return new Promise((resolve, reject) => {
        User.findOne({$or: [{email: body.email},{userName: body.userName}]}, (err, user) => {
            
            if (err) reject({err: true, Msg: 'Sorry we have internal error'});

            if (user) reject({err: true, Msg: 'User already exists'});

            resolve(body);
        
        })          
    })
};

/**
 *Add new user in database, (and hash user password using base64) referene to {signUpNewUserHandler}
 *@param {Object}
 *@return {Promise}
 */
const addNewUser = (data) => {
    return new Promise((resolve, reject) => {
        let NewUser = new User({
            userName: data.userName,
            email: data.email,
            password: base64.encode(data.signUpPassword)
        });
        
        NewUser.save((err, data) => {
            
            if (err) reject({err: true, Msg: 'Sorry we have internal error'});

            resolve({err: false, Msg: ''});
        });
    });

} 