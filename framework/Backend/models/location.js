const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    postal: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
              return /^\d{4}$/.test(v); // Validar que el postal tenga longitud 4
            },
            message: 'Postal code must be a 4-digit number.'
        }
    }
},{versionKey:false,collection: 'location'});

module.exports = mongoose.model('location',locationSchema)