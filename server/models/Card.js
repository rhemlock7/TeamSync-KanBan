const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const cardSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30,
        trim: true,
    },
    listId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    description: {
        type: String,
        minlength: 1,
        maxlength: 300,
        trim: true,

    },
    // iscompldeted
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            commentAuthor: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ]
});

const Card = model('Card', cardSchema);

module.exports = Card;
