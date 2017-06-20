import { MailerCongif } from './../configs/mailer.config';
import smtpTransport from 'nodemailer-smtp-transport';
import nodemailer from 'nodemailer';

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
 */
const sendSignUpToken = (subject, toUser, text) => {
    console.log('I am in sendSignUptoken');
    console.log(toUser)
    return new Promise((resolve, reject) => {
        
        let mailOptions = {
            from: MailerCongif.user,
            to: toUser,
            subject: subject,
            text: text
        }
        
        transporter.sendMail(mailOptions, (err, info) => {
            
            if (err) reject(err);

            console.log('it is ok !!!!');
            console.log(info);
            resolve(info);
        
        });
    
    });

}

module.exports.sendSignUpToken = sendSignUpToken;