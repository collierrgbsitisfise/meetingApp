import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class ConfirmEmail extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="alert alert-success">
                    The email was successfully delivered to  <b> {this.props.params.emailName} </b>                  
                </div>
            </div>
        );
    }
}

export default ConfirmEmail;