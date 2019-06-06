const Dish = require('./models/dishes');
const url = 'mongodb://localhost:27017/conFusion';
const mongoose = require('mongoose');

const connect = mongoose.connect(url);

connect.then((db)=>{
    
    Dish.create({
        name: 'Uthapizza',
        description: 'Test'

    })
    .then((dish)=>{
        return Dish.findByIdAndUpdate(dish._id,
            { $set:{ description: 'Updated text' } }, { new: true} 
            ).exec();
        })
    .then((dish)=>{
         dish.comments.push({
            user: 'Jose',
            comment: 'it is going'
         });
         return dish.save();
    })
    .then((dish) => {
        console.log(dish);
        return Dish.remove({});
    })

    .then(()=>{
        return mongoose.connection.close();
    })
    .catch ((err)=>{
        console.log(err);
    });
});