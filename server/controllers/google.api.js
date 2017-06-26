import axios from 'axios';

/**
 * get information(photo) by location coordinates
 * @param {Float} req.body.lat
 * @param {Float} req.body.lng
 * @param {Integer} req.body.radius
 * @param {String} req.body.GOOGLE_API_KEY
 * @return {Promise<array>}
 */
module.exports.getPhotoByLocationHandler = function getPhotoByLocationHandler (req, res) {
    axios({
        method: 'post',
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.body.lat},${req.body.lng}&radius=${req.body.radius}&key=${req.body.GOOGLE_API_KEY}`,
        responseType: 'json'
    }).then(succes => {
        res.send(succes.data);
    }).catch(err => {
        res.status(403).send({error: false, msg: 'Sorry we have internal error'});
    });
}