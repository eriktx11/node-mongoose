const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema (
    {
        comment:{
            type: String,
            required: true,
        },
        user:
        {
            type: String,
            require: true
        },
    },{
        timestamps: true
    }
)

var dishSchema = new Schema (
    {
    name: 
    {   type: String,
        unique: true,
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
    comments: [ commentSchema ]
    },
    {
    timestamps: true 
    }
);

var Dish = mongoose.model('Dish', dishSchema);
module.exports = Dish;