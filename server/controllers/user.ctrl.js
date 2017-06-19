import { User } from './../models/user.model';
import base64 from 'base-64';
module.exports.signUpNewUserHandler = function signUpNewUserHandler (req, res) {

    VerifyIfExistAlready(req.body)
        .then(data => {
            return data;        
        })
        .then(data => {
            addNewUser(data)
                .then(succes => {
                    res.send(succes);
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
 *Verify if user with 'this' name or email already exists
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
 *Add new user in database, (and hash user password using base64)
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