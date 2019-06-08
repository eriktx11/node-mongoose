const Dishes = require('./models/dishes');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url);

connect.then((db)=>{
    
    Dishes.create({
        name: 'BurgerRice',
        description: 'IN CA'
    })
    .then((dishes)=>{
        return Dishes.findByIdAndUpdate(dishes._id, { $set: { description: 'Other mod text' }}, {new: true} ).exec();
    })
    .then((dishes)=>{
        dishes.comments.push({
            feedback: 'Extract',
            user: 'Robib'
        });
        console.log(dishes);
        return dishes.save();
    })
    .then((dishes)=>{
        return Dishes.remove({});
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch ((err)=>{
        console.log(err);
    });
});