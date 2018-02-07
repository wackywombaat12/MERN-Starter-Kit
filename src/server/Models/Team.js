const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

var TeamSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    sport: {
        type: String,
        trim: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('Team', TeamSchema);