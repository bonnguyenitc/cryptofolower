const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchame = new Schema({
    crypto: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    }
});
// Create collection and add schema
const Vote = mongoose.model('Vote', VoteSchame);

module.exports = Vote;