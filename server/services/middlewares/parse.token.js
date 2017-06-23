import JWT from 'jsonwebtoken';
import { S_K } from './../../configs/secret.key';

module.exports.parseToken = function parseToken (req, res, next) {

    if (!req.headers.token) return res.status(401).send({succes: false, message: 'No token provider'});

    JWT.verify(req.headers.token, S_K, (error, decode) => {
        if (error) return res.status(401).send({succes: false, message: 'Invalid Token'});
        
        req.UserInfo = decode;
        
        next();
    
    });

    

  
}; 