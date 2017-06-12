import React from 'react';
import { Route , IndexRoute } from 'react-router';

import App from './App';
import About from './components/About';
import SignUp from './components/SignUp/signup';
import SignIn from './components/SignIn/signin';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={About} />
        <Route path="signin" component={SignUp}/>
        <Route path="signup" component={SignIn}/>
    </Route>
)
