const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/meetings_db');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {type: String, required: true, unique: true, minlength: 3, maxlength: 30},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 5},
    meetings: [{type: Schema.Types.ObjectId, ref: 'Meeting'}]
});

module.exports.User = mongoose.model('User', UserSchema);
