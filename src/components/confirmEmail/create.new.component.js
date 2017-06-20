import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { addNewUserRequest } from './actions/action.confirmEmail';

class CreateNew extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            ifError: false,
        }
        
        this.sendToken = this.sendToken.bind(this);
        
        this.sendToken();
    }

    sendToken () {
        addNewUserRequest({token: this.props.params.token})
            .then(succes => {
                
                this.setState({
                    ifError: false
                }, () => {
                    hashHistory.push('signin');
                });
            
            })
            .catch(err => {
                
                this.setState({
                    ifError: true
                });
            
            })
    }
    
    respShow = () => {
        return this.state.ifError ? <div className="alert alert-danger">Sorry! Probably You Have Unusable token.Email is valid only 20 minutes!</div>
                           : <div className="alert alert-success"> Email Succesfuly was aproved </div>
    }
    
    render() {
        return (
            <div className="jumbotron">
                {this.respShow()}
            </div>
        );
    }
}

export default connect(null, { addNewUserRequest } )(CreateNew);