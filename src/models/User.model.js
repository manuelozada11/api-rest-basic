const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, require: true },
    lastname: { type: String, require: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema); 