import React from 'react';
import { Route , IndexRoute } from 'react-router';

import App from './App';
import About from './components/About';
import SignUp from './components/SignUp/signup';
import SignIn from './components/SignIn/signin';
import CreateMeeting from './components/new-meeting/newMeeting';
import FindMeeting from './components/findMeeting/findMeeting';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={About} />
        <Route path="create-meeting" component={CreateMeeting}/>
        <Route path="find-meeting" component={FindMeeting}/>
        <Route path="signin" component={SignIn}/>
        <Route path="signup" component={SignUp}/>
    </Route>
)
