const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    idOrder: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    totalValue: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return v >= 0;
            },
            message: 'Total value must be a non-negative number.'
        }
    },
    idLocation: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, { versionKey: false, collection: 'Invoice' });

module.exports = mongoose.model('Invoice', invoiceSchema);
