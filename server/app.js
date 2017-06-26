import express from 'express';
import bodyParser from  'body-parser';
import UserCtrl from './controllers/user.ctrl';
import meetingCtrl from './controllers/meeting.ctrl';
import TokenService from './services/token/token.service';
import { parseToken } from './services/middlewares/parse.token';
import googleAPI from './controllers/google.api';
const app = express();

/*Use Midleware*/
app.use(bodyParser.json());

/*allw acces-control-allow-origin*/
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/*Routes*/
/*SignIn and SignUp*/
app.post('/sende-email-confirm', UserCtrl.SendEmailConfirmSingUp);
app.post('/create-acc', UserCtrl.createAccountHandler);
app.post('/signin-user', UserCtrl.signInUserHandler);

/*verify Token*/
app.post('/verify-token', TokenService.isValidTokenHandler);

/*add new EventMeeting*/
app.post('/meeting/add', parseToken, meetingCtrl.addEventMeetingHandler);

/*goole API requests*/
app.post('/getphoto/location', googleAPI.getPhotoByLocationHandler);
/*Start server*/
app.listen(8080, () => console.log('server successfuly do it ^_^'));