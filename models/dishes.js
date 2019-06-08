const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema (
    {
        feedback:
        {
            type: String,
            required: true,
        },
        user:
        {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }

);

const dishSchema = new Schema (
    {
        name:
        {
            type: String,
            required: true,
            unique: true
        },
        description:
        {
            type: String,
            required: true
        },

       comments: [commentSchema]
    },
    {
        timestamps: true
    }
);

const Dishes = mongoose.model('dishes', dishSchema);
module.exports = Dishes;
