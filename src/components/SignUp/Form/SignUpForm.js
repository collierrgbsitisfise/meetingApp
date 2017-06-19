import React, { Component } from 'react';

import "./FormStyles.css";

class SignUpForm extends Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
            email: '',
            userName: '',
            signUpPassword: '',
            signUpRepeatPassword: '', 
            ifError: false,
            ifLoaded: false
        }
        
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
    }
    
    onChangeInput (e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit (e) {
        e.preventDefault();
        console.log(this.state)
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
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
                        
                        <button type="submit" className="btn btn-primary SignUpButton">Sign Up</button>
                    </form>
                </div>
                
                <div className="col-md-2"></div>
            
            </div>
        );
    }
}

export default SignUpForm;