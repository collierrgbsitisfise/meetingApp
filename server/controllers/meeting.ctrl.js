import { Meeting } from './../models/meeting.model';
import { User } from './../models/user.model';
import JWT from 'jsonwebtoken';
import { S_K } from './../configs/secret.key';

/**
 * add new Meeting day for User
 * @param {Object} req.body
 * @param {Object} req.UserInfo
 * @return {JSON}
 */
module.exports.addEventMeetingHandler = function addEventMeetingHandler (req, res) {
    
    let meetingForadd = {
        lat: req.body.MeetingLat,
        lan: req.body.MeetingLog,
        MeetingDescriptipn: req.body.MeetingDescription,
        MeetingTitle: req.body.MeetingName
    }
    
    try {
        
        User.update({_id: req.UserInfo._doc._id}, { $addToSet: { meetings: meetingForadd}}, (err, user) => {
            
            if (err) res.status(403).send({error: false, msg: err});

            res.send({error: false, msg: 'succesfuly added'})    
         })
    
    
    } catch (e) {
        
        res.status(403).send('sorry we have internal error');
    
    }   

}

module.exports.getAllMeetingsHandler = function getAllMeetingsHandler (req, res) {
    
} 