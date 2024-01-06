const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        require: true,
        enum: ['admin', 'employee', 'client']
    },
    password: {
        type: String,
        required: true
    }
},{versionKey:false,collection: 'User'});

module.exports = mongoose.model('User',userSchema)
