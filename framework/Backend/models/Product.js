const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['bebida caliente', 'bebida fria', 'bocadillos']
    },
    price: {
        type: Number,
        required: true
    }
},{timestamps: true,versionKey:false,collection: 'Product'});

module.exports = mongoose.model('Product',productSchema)