const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    idProduct: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return v >= 0;
            },
            message: 'Amount must be a non-negative number.'
        }
    }
}, {timestamps: true,versionKey: false, collection: 'Order' });

module.exports = mongoose.model('Order', orderSchema);
