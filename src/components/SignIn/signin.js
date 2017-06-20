import React from 'react';

import SignInForm from './Form/signInForm';
import { connect } from 'react-redux';
import { userSignInRequest } from './actions/signin.action';

class SignIn extends React.Component {
    render () {
        return (
            <div className="jumbotron">
                <SignInForm userSignInRequest={userSignInRequest} />
            </div>
        );
    }
}

export default connect(null, { userSignInRequest } )(SignIn);