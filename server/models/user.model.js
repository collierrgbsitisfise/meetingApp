const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/meetings_db');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    meetings: [{type: Schema.Types.ObjectId, ref: 'Meeting'}]
});

module.exports.User = mongoose.model('User', UserSchema);
