import React, { Component } from 'react';

class ProfileMeetings extends Component {
    constructor (props) {
        super(props);

        console.log('it is props in PRERTERTERT');
        console.log(this.props);
    }
    
    _renderAllMeetings () {
        this.props.meetings.map(item => {
           return (
            <div className="panel panel-default">
                <div className="panel-heading">Panel heading without title</div>
                <div className="panel-body">
                    Panel content
                    {this._renderAllMeetings}
                </div>
            </div>
           );
        })
    }
    
    render() {
       return  <div className="col-xs-8 col-md-8">
                {this._renderAllMeetings()}
        </div>
    }
}

export default ProfileMeetings;