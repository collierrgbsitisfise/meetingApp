import React from 'react';

import SignUpForm from './Form/SignUpForm';
import { connect } from 'react-redux';
import { userSignUpRequest } from './actions/actions.signup';

class SignUp extends React.Component {
    render () {
        return (
            <div className="jumbotron">
                <SignUpForm userSignUpRequest={userSignUpRequest}/>
            </div>
        )
    }
}

export default connect(null, { userSignUpRequest } )(SignUp);