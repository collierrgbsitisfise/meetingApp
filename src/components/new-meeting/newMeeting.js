import React from 'react';

class CreateMeeting extends React.Component {
    render () {
        console.log('This is Props');
        console.log(this.props);
        return (
            <div className="jumbotron">
                <h1>Hello From Create Meeting</h1>
            </div>
        )
    }
}

export default CreateMeeting;