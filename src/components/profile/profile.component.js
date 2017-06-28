import React, { Component } from 'react';
import { getUserInfoRequest } from './actions/profile.actions';
import { connect } from 'react-redux';

class ProfileComponent extends Component {
    constructor (props) {
        super(props);
        
        console.log('Hi from constructor');
        
        this.state = {
            userInfo: {}
        };

        this.getUserInfo = this.getUserInfo.bind(this);
    }
    
    getUserInfo () {
       console.log('Hi from get User Info function');
       getUserInfoRequest().then(data => {
            console.log('it is ok from server');
            console.log(data);
       })
       .catch(err => {
           console.log('bad response from server');
           console.log(err);
       })
    }
    
    componentWillMount() {
        console.log('I am Amounted');
        this.getUserInfo();    
    }
    
    render() {
        return (
            <h1>
                Hello From Profile Component !!!
            </h1>
        );
    }
}

export default connect(null, { getUserInfoRequest } )(ProfileComponent);