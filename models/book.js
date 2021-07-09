const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number,
    },
    pages: {
        required: true,
        type: Number
    }
});

module.exports = new model('Book', schema);