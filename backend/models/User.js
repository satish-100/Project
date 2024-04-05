// models/Item.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: {type: String,unique: true,required: true},
    password:{type:String}
});

module.exports = mongoose.model('User', userSchema);
