import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { verifyTokenRequest } from './actions/navigationbar.actions';

class NavigationBar extends React.Component {
    
    constructor (props) {
        
        super(props);
        
        this.state = {
            isValidToken: false
        }        

        this.leftNavRender = this.leftNavRender.bind(this);        
        this.rightReneder = this.rightReneder.bind(this);
        
    }
    
    componentWillMount () {
        
        verifyTokenRequest({
            token: localStorage.getItem('token')
        }).then(succes => {
            this.setState({isValidToken: true});
        })
        .catch(err => {
            this.setState({isValidToken: false});
        })
    
    }
    
    leftNavRender () {
        return this.state.isValidToken ?  this.forValidTokenLeft() : this.forInvalidTokenLeft();
    }
    
    forValidTokenLeft () {
        
        return (
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">SignOut</a></li>
            </ul>
        );
    }

    forInvalidTokenLeft () {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="signin">SignIn</Link></li>
                <li><Link to="signup">SignUp</Link></li>
            </ul>
        );
    }  
    
    rightReneder () {
        return this.state.isValidToken ? this.forValidTokenRigth() : this.forInvalidValidTokenRigth();
    }
    
    forValidTokenRigth () {
        return (
            <ul className="nav navbar-nav">
                <li><Link to="/">About</Link></li>
                <li><Link to="create-meeting">Create New Meeting</Link></li>
                <li><Link to="find-meeting">Find Meeting</Link></li>
            </ul>
        );
    }

    forInvalidValidTokenRigth () {
        return (
            <ul className="nav navbar-nav">
                <li><Link to="/">About</Link></li>
            </ul>
        );
    }
    
    render() {
        return (
            <nav className="navbar navbar-inverse">

                <div className="container-fluid">

                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">
                            <img alt="Brand" src="http://www.countryclubmeetings.com/sites/default/files/styles/480x480_square/public/service-icons/countryclubmeetings-icon-pin.png?itok=eP9RIquA" width="25px" height="25px"/>
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="colapsebleNavigation">
                        {this.rightReneder()}
                        {this.leftNavRender()}
                    </div>

                </div>

            </nav>
        )
    }
}

export default connect(null, { verifyTokenRequest } )(NavigationBar);
