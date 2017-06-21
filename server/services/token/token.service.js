import JWT from 'jsonwebtoken';
import { S_K } from './../../configs/secret.key';

/**
 * verrif if 'curent' token is valid or 'no'
 * @param {Object} req
 * @param {String} req.body.token
 * @param {Object} res
 * @return {Void}
 */
module.exports.isValidTokenHandler = function isValidTokenHandler (req, res) {
    
    try {

        var tokenInfo = JWT.verify(req.body.token, S_K);
    
    } catch (err) {

        return res.status(403).send({ success: false, message: 'Unusable token' });

    }
    
    res.status(200).send({succes: true, messsage: 'Valid Token'});

}