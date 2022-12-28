const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isLogin: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    profilePic: { type: String }
},{timestamps: true}); 

module.exports = mongoose.model('User', userSchema);