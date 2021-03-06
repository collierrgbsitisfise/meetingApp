import React from 'react';

import Autocomplete from 'react-google-autocomplete';
import GoogleMapReact from 'google-map-react';

import LocationGallery from './GallleryLocation/gallery';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { getPhotoForLocalityAction, addNewMeetingAction } from './actions/actions.newmeeting';

class CreateMeeting extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            MeetingName: '',
            MeetingDestination: '',
            Meetinglocality: '',
            MeetingLat: 27,
            MeetingLog: 48,
            MeetingDescription: '',
            locationPhoto: [],
            isError: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    
    onChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log('State is changed');
            console.log(this.state);
        })
    } 
    
    onSubmitForm (e) {
        this.setState({
            isError: false
        });
        
        e.preventDefault();

        addNewMeetingAction(this.state)
            .then(success => {
                hashHistory.push('/');
            })
            .catch(err => {
                this.setState({
                    isError: true
                });
            })
    }
    
    LocationsPhoto () {

    }
    render () {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-4">
                        <form>
                            <div className="form-group">
                                <lable for="MeetingName" className="FormLabel">Meeting Name</lable>
                                <input type="text" className="form-control" id="MeetingName" placeholder="Meeting Name..."
                                    value={this.state.MeetingName}
                                    onChange={this.onChange}
                                    name="MeetingName"/>
                            </div>
                            
                            <div className="form-group">
                                <lable for="MeetingDestination" className="FormLabel">Meeting Destination</lable>
                                <input type="text" className="form-control" id="MeetingDestination" placeholder="Meeting Destination..."
                                    value={this.state.MeetingDestination}
                                    onChange={this.onChange}
                                    name="MeetingDestination"/>
                            </div>
                            
                            <div className="from-group">
                                <lable for="Meetinglocality" className="FormLabel">Meeting Place</lable>
                                <Autocomplete name="Meetinglocality" onChange={this.onChange}
                                            value={this.state.Meetinglocality}
                                             placeholder="locality name..."
                                            style={{width: '100%'}}
                                            types={['address']}
                                            onPlaceSelected={(place) => {                                               
                                                if (place.geometry) {
                                                    this.setState({
                                                            Meetinglocality: place.formatted_address,
                                                            MeetingLat: place.geometry.location.lat(),
                                                            MeetingLog: place.geometry.location.lng(),
                                                            locationPhoto: place.photos || []
                                                    }, () => {
                                                        getPhotoForLocalityAction({
                                                            lat: place.geometry.location.lat(),
                                                            lng: place.geometry.location.lng(),
                                                            radius: 500
                                                        }).then(res => {
                                                            console.log(' IT is ok Succes!!!');
                                                            console.log(res.data);
                                                            this.setState({
                                                                locationPhoto: res.data.results.filter( item => {
                                                                    return item.photos;
                                                                })
                                                            })
                                                        }).catch(err => {
                                                            console.log('Error!!!');
                                                            console.log(err);
                                                        })
                                                    });

                                                    return;                                                   
                                                }


                                                this.setState({
                                                        Meetinglocality: '',
                                                        MeetingLat: 48,
                                                        MeetingLog: 27,
                                                        locationPhoto: []
                                                });
                                            
                                
                                        }}/>                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-6">
                                    <div className="form-group">
                                        <lable for="MeetingLat" className="FormLabel">Lat cordinates</lable>
                                        <input type="text" className="form-control" id="MeetingLat" placeholder="Meeting Lat posion..."
                                            value={this.state.MeetingLat}
                                            onChange={this.onChange}
                                            disabled={true}
                                            name="MeetingLat"/>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-6 col-xs-6">
                                    <div className="form-group">
                                        <lable for="MeetingLog" className="FormLabel">Long cordinates</lable>
                                        <input type="text" className="form-control" id="MeetingLog" placeholder="Meeting Long posion..."
                                            value={this.state.MeetingLog}
                                            onChange={this.onChange}
                                            disabled={true}
                                            name="MeetingLog"/>
                                    </div>
                                </div>        
                            </div>
                            
                            <div className="form-group">
                                <lable for="MeetingDescription" className="FormLabel">Meeting Name</lable>
                                <textarea type="text" className="form-control" id="MeetingDescription" placeholder="Meeting Description..."
                                        rows="4"
                                        value={this.state.MeetingDescription}
                                        onChange={this.onChange}
                                        name="MeetingDescription" MeetingDescription/>
                            </div>
                            {this.state.ifError && <div className="alert alert-danger">Sorry , we have internal errors</div>} 
                            <div className="form-group">
                                <button type="button" className="btn btn-primary btn-lg btn-block SignUpButton" onClick={this.onSubmitForm}>Create New</button>                            
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-8">
                        <GoogleMapReact
                            style={{width: '100%', height: '430px', marginTop: '20px'}}
                            defaultCenter={{lat: this.state.MeetingLat, lng: this.state.MeetingLog}}
                            defaultZoom={8}
                            onClick={(place) => console.log(place)}>

                        </GoogleMapReact>
                    </div>
                
                </div>
                <div className="row">
                    {this.state.locationPhoto.length > 0 ? <h3 style={{color: '#6cb426'}}>Prewie Photo</h3> : ''}
                    {this.state.locationPhoto.length > 0 ? <LocationGallery photos={this.state.locationPhoto}/> : ''}
                </div>
            </div>
        )
    }
}

export default connect(null, { getPhotoForLocalityAction , addNewMeetingAction } )(CreateMeeting);