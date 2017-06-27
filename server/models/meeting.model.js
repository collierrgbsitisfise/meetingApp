const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/meetings_db');

const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
    lat: {type: String, required: true},
    lan: {type: String, required: true},
    MeetingDescriptipn: {type: String, required: true},
    MeetingTitle: {type: String, required: true},
});

module.exports.Meeting = mongoose.model('Meeting', MeetingSchema);