import { Meeting } from './../models/meeting.model';
import JWT from 'jsonwebtoken';
import { S_K } from './../configs/secret.key';

module.exports.addEventMeetingHandler = function addEventMeetingHandler (req, res) {
    console.log('it id User Info');
    console.log(req.UserInfo);
    res.send('ok');
}