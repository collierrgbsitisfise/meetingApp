import express from 'express';
import bodyParser from  'body-parser';
import UserCtrl from './controllers/user.ctrl';
import meetingCtrl from './controllers/meeting.ctrl';
import TokenService from './services/token/token.service';
import { parseToken } from './services/middlewares/parse.token';

const app = express();

/*Use Midleware*/
app.use(bodyParser.json());

/*Routes*/
/*SignIn and SignUp*/
app.post('/sende-email-confirm', UserCtrl.SendEmailConfirmSingUp);
app.post('/create-acc', UserCtrl.createAccountHandler);
app.post('/signin-user', UserCtrl.signInUserHandler);

/*verify Token*/
app.post('/verify-token', TokenService.isValidTokenHandler);

/*add new EventMeeting*/
app.post('/meeting/add', parseToken, meetingCtrl.addEventMeetingHandler);

/*Start server*/
app.listen(8080, () => console.log('server successfuly do it ^_^'));