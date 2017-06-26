import React, { Component } from 'react';

class LocationGallery extends Component {
    
    constructor(props) {
        super(props)
        console.log('it is props in Gallery');
        console.log(this.props);
    }
    
    renderPhotos () {
        return this.props.photos.map( (item, index) => {
            return <img src={item.getUrl({'maxWidth': 300, 'maxHeight': 300})} className="img-rounded" alt="Cinque Terre" width="300" height="300" key={item.getUrl({'maxWidth': 300, 'maxHeight': 300}) + index}  style={{margin: '20px', border: '3px solid #6cb426'}}/>
        })
    }
    
    render() {
        return (
            <div>
                {this.renderPhotos()}
            </div>
        );
    }
}

export default LocationGallery;