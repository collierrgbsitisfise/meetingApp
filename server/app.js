import express from 'express';
import bodyParser from  'body-parser';
import UserCtrl from './controllers/user.ctrl';

const app = express();

/*Use Midleware*/
app.use(bodyParser.json());

/*Routes*/
app.post('/sende-email-confirm', UserCtrl.SendEmailConfirmSingUp);
app.post('/create-acc', UserCtrl.createAccountHandler);
app.post('/signin-user', UserCtrl.signInUserHandler);

/*Start server*/
app.listen(8080, () => console.log('server successfuly do it ^_^'));