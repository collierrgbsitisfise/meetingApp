import React from 'react';

import SignUpForm from './Form/SignUpForm';

class SignUp extends React.Component {
    render () {
        return (
            <div className="jumbotron">
                <SignUpForm/>
            </div>
        )
    }
}

export default SignUp;