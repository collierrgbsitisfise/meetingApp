import React, { Component } from 'react';
import { getUserInfoRequest , uploadProfileAvatarRequest } from './actions/profile.actions';
import { connect } from 'react-redux';
import FormData from 'form-data';
import ProfileMeetings from './components/profilemeeting.component';
import GoogleMapReact from 'google-map-react';
import './profile.style.css';

const pointMap = (lat=21, lng=21) => {
    return (
        <img src="https://cdn3.iconfinder.com/data/icons/flat-icons-medium-sized/64/location-pin-512.png" width="25px" height="25px" lat={lat} lng={lng} alt="" />
    );
}

const allMeetingsForUser = (allMeetings) => {
    var allMeet = allMeetings;
    
    return () => {
        
        return allMeet.map(item => {
            
            let [defLatCenter , defLanCenter] = [parseFloat(item.lat), parseFloat(item.lan)];
            return (
                    <div className="panel panel-default" key={item._id}>
                        <div className="panel-heading itemHead">{item.MeetingTitle}</div>
                        <div className="panel-body" style={{height: '100px', overflowY: 'scroll', overflowX: 'hiden', background: '#c5fcc2', color: '#2c3830', fontSize: '16px'}}>
                            {item.MeetingDescriptipn.repeat(4)}
                            <br/>
                            {item.MeetingDescriptipn.repeat(4)}
                            <br/>
                            {item.MeetingDescriptipn.repeat(4)}
                        </div>
                        <div className="mapFooter" style={{height: '300px', marginTop: '10px'}}>
                            <GoogleMapReact
                                defaultCenter={{lat: parseFloat(item.lat), lng: parseFloat(item.lan)}}
                                defaultZoom={7}>

                                {pointMap(defLatCenter, defLanCenter)}
                            </GoogleMapReact>
                        </div>
                    </div>
            );
        
        });
    
    }

}

class ProfileComponent extends Component {
    constructor (props) {
        super(props);
        
        console.log('Hi from constructor');
        
        this.state = {
            userInfo: {},
            fileForUpload: {},
            returnAllmeetins: () => {},
            ifNotExistFileForUpload: true,
        };

        this.getUserInfo = this.getUserInfo.bind(this);
        this._handleImageChange = this._handleImageChange.bind(this);

        this.getUserInfo();
    }
    
    getUserInfo () {
  
       getUserInfoRequest().then(res => {
            this.setState({
                userInfo: res.data,
                returnAllmeetins: allMeetingsForUser(res.data.meetings),
                meetings: res.data.meetings
            });
       })
       .catch(err => {
           console.log('bad response from server');
           console.log(err);
       })
    
    }
    
    _handleImageChange (e) {
        
        e.preventDefault();
        
        this.setState({
            ifNotExistFileForUpload: false,
            fileForUpload: e.target.files[0] 
        })

    }

    componentDidMount() {
        console.log('component did mount');
    }
    
    UploadBtn () {
        return <button className="btn-block uploadBtn" disabled={this.state.ifNotExistFileForUpload}>Upload</button> 
    }
    
    _allMeetings () {
        console.log('it is state in allMeeting func');
        console.log(this.state.userInfo);
        return this.state.userInfo.meetings.map(item => {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Panel heading without title</div>
                    <div className="panel-body">
                        Panel content
                    </div>
                </div>
            );
        })
    }
    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-xs-4 col-md-4">
                        <img className="img-rounded profileImg" src="https://gampahatown.lk/oc-content/plugins/profile_picture/avatar-default.jpg" alt=""/>

						<div className="btn btn-block">
							<input type="file" accept="image/png, image/jpeg, image/gif"
                                   onChange={this._handleImageChange}/>
                            {!this.state.ifNotExistFileForUpload ? this.UploadBtn() : ''}
						</div>                    
   
                        <div className="infoBlock">
                            <label htmlFor="name" className="Title">Name : </label>
                            <span id="name" className="valueText">{this.state.userInfo.userName}</span> 
                        </div>

                        <div className="infoBlock">
                            <label htmlFor="name" className="Title">Email : </label>
                            <span id="name" className="valueText">{this.state.userInfo.email}</span> 
                        </div>
                        
                    </div>
                    <div className="col-xs-8 col-md-8">
                        {this.state.returnAllmeetins()}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { getUserInfoRequest , uploadProfileAvatarRequest } )(ProfileComponent);