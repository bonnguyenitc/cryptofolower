const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchame = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
// Create collection and add schema
const User = mongoose.model('User', UserSchame);

module.exports = User;