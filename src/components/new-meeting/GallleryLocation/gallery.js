import React, { Component } from 'react';
import './gallery.styles.css';

class LocationGallery extends Component {
    
    constructor(props) {
        super(props)
        console.log('it is props in Gallery');
        console.log(this.props);
    }
    
    getTagsForPlace (arrIn) {
        return arrIn.map(item => {
            return (
                <span className="tagCard">{item}</span>
            )
        });
    }
    renderPhotos () {
        return this.props.photos.map( (item, index) => {
            console.log(item);
            let imgSrc = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=450&maxheight=450&photoreference=${item.photos[0].photo_reference}&key=AIzaSyBAmRjgHlQ1CzcQC2eRI7eTIfVCp_jgJHU`;
            return <div className="col-md-4" key={item.photos[0].photo_reference}>
                        <div className="thumbnail card">
                            <img src={imgSrc} alt="Lights" style={{width: '300px', height: '300px'}}/>
                            <div className="captionImg" style={{width: '200px', height: '400px'}}>
                                <h3 className="captureCard">{item.name}</h3>
                                <hr/>
                                <p>{item.vicinity}</p>
                             </div>
                             <div className="footerCard">
                                {this.getTagsForPlace(item.types)}
                             </div>
                        </div>
                    </div>
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