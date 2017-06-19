import React from 'react';
import { Link } from 'react-router';

export default () => {
    return (
        <nav className="navbar navbar-inverse">

            <div className="container-fluid">

                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        <img alt="Brand" src="http://www.countryclubmeetings.com/sites/default/files/styles/480x480_square/public/service-icons/countryclubmeetings-icon-pin.png?itok=eP9RIquA" width="25px" height="25px"/>
                    </Link>
                </div>

                <div className="collapse navbar-collapse" id="colapsebleNavigation">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">About</Link></li>
                        <li><Link to="create-meeting">Create New Meeting</Link></li>
                        <li><Link to="find-meeting">Find Meeting</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="signin">SignIn</Link></li>
                        <li><Link to="signup">SignUp</Link></li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}
