import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import "./FormStyles.css";

class SignInForm extends Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
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
            
        if (this.ifErrorValidtor(this.state)) {
            this.setState({
                ifError: true,
                errorMsg: `Verify you'r inputs one more time!`
            })
            return;
        }
        
        this.setState({ifLoaded: true});
        
        this.props.userSignInRequest(this.state)
            .then(succes => {
               
                this.setState({
                    ifLoaded: false,
                    ifError: false
                });

                //save info token and userInfo    
                localStorage.setItem('token', succes.data.token);
                localStorage.setItem('userInfo', JSON.stringify(succes.data.userInfo));
                
                hashHistory.push('/');
            })
            .catch(err => {
                this.setState({
                    ifError: true,
                    errorMsg: `Verify you'r inputs one more time!`,
                    ifLoaded: false
                 })
            })
    }
    
    
    ifErrorValidtor (validObj) {
        return (!validObj.email || !validObj.password) ? true : false;
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
                            <lable for="signUpPassword" className="FormLabel">Password</lable>
                            <input type="password" className="form-control" id="signUpPassword" placeholder="Password..."
                                   name="password"
                                   value={this.state.password}
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

export default SignInForm;