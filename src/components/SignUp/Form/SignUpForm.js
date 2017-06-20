import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import "./FormStyles.css";

class SignUpForm extends Component {
    
    constructor (props) {
        super(props);
        console.log(this.props);
        this.state = {
            email: '',
            userName: '',
            signUpPassword: '',
            signUpRepeatPassword: '', 
            ifError: false,
            ifLoaded: false,
            errorMsg: ''
        }
        
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.ifErrorValidtor = this.ifErrorValidtor.bind(this);
    
    }
    
    onChangeInput (e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit (e) {
        e.preventDefault();
        
        this.setState({errorMsg: '', ifError: false});
        
        if (this.ifErrorValidtor(this.state)) {
            this.setState({
                errorMsg: 'Verify inputs , somthing wrong!!!',
                ifError: true,
                signUpPassword: '',
                signUpRepeatPassword: ''
            });
            return;
        }
        
        this.setState({ifLoaded: true});
        
        this.props.userSignUpRequest(this.state)
            .then(succes => {
                this.setState({ifLoaded: false});
                hashHistory.push(`confirm-email/${succes.data.accepted[0]}`);
            }).catch(err => {
                console.log(err);
                this.setState({
                    ifLoaded: false,
                    errorMsg: 'Verify inputs , somthing wrong!!!',
                    ifError: true,
                    signUpPassword: '',
                    signUpRepeatPassword: ''
                });
            });
    }
    
    
    ifErrorValidtor (validObj) {
        return (!validObj.signUpPassword || (validObj.signUpPassword !== validObj.signUpRepeatPassword)) ? true : false;
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-2 col-sm-2 col-xs-2"></div>
                <div className="col-md-8 col-sm-8 col-xs-8">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <lable for="signUpEmail" className="FormLabel">Email</lable>
                            <input type="email" className="form-control" id="signUpEmail" placeholder="Email..."
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.onChangeInput}/>
                        </div>

                        <div className="form-group">
                            <lable for="signUpUserName" className="FormLabel">User Name</lable>
                            <input type="text" className="form-control" id="signUpUserName" placeholder="User name..."
                                   name="userName"
                                   value={this.state.userName}
                                   onChange={this.onChangeInput}/>
                        </div>

                        <div className="form-group">
                            <lable for="signUpPassword" className="FormLabel">Password</lable>
                            <input type="password" className="form-control" id="signUpPassword" placeholder="Password..."
                                   name="signUpPassword"
                                   value={this.state.signUpPassword}
                                   onChange={this.onChangeInput}/>
                        </div>

                        <div className="form-group">
                            <lable for="signUpRepeatPassword" className="FormLabel">Repeat Password</lable>
                            <input type="password" className="form-control" id="signUpRepeatPassword" placeholder="Repeat password..."
                                   name="signUpRepeatPassword"
                                   value={this.state.signUpRepeatPassword}
                                   onChange={this.onChangeInput}/>
                        </div>
                        {this.state.ifError && <div className="alert alert-danger">{this.state.errorMsg}</div>}  
                        <button disabled={this.state.ifLoaded} type="submit" className="btn btn-primary SignUpButton">Sign Up</button>
                    </form>
                </div>
                
                <div className="col-md-2 col-sm-2 col-xs-2"></div>
            
            </div>
        );
    }
}

export default SignUpForm;