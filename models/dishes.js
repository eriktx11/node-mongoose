const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
    },
    {
        timestamps: true 
    }
);

var Dish = mongoose.model('Dish', dishSchema);
module.exports = Dish;