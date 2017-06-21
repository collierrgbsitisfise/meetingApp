import { MailerCongif } from './../configs/mailer.config';
import smtpTransport from 'nodemailer-smtp-transport';
import nodemailer from 'nodemailer';
import JWT from 'jsonwebtoken';
import { S_K } from './../configs/secret.key';
import {PORT , HOST} from './../configs/aplication.config';

const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: MailerCongif.user,
        pass: MailerCongif.pass,
    }
}));


/**
 * Using 'nodemailer', send  confiramtion email with verufy link
 * @param {String} subject 
 * @param {String} toUser 
 * @param {String} text 
 * @param {Object} allUserInfo
 */
const sendSignUpToken = (subject, toUser, text, allUserInfo) => {

    return new Promise((resolve, reject) => {
        
        let newToken = JWT.sign(allUserInfo, S_K, {
            expiresIn: 60 * 2000
        });
        
        let mailOptions = {
            from: MailerCongif.user,
            to: toUser,
            subject: subject,
            text: `${text} http://${HOST}:${PORT}/#/succes-confirm/${newToken}`
        }
        
        transporter.sendMail(mailOptions, (err, info) => {
            
            if (err) reject(err);

            resolve(info);
        
        });
    
    });

}

module.exports.sendSignUpToken = sendSignUpToken;