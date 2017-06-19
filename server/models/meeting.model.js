var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
    lat: {type: String, required: true},
    lan: {type: String, required: true},
    MeetingDescriptipn: {type: String, required: true}
});

module.exports.Meeting = mongoose.model('Meeting', MeetingSchema);