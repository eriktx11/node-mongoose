const Dish = require('./models/dishes');
const url = 'mongodb://localhost:27017/conFusion';
const mongoose = require('mongoose');

const connect = mongoose.connect(url);



connect.then((db)=>{
    
var newDish = new Dish ({
    name: 'Uthapizza',
    description: 'Test'
}    
);
    newDish.save()
    .then((dish)=>{
        return Dish.find({});
    })
    .then((dish)=>{
        return Dish.remove({});
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch ((err)=>{
        console.log(err);
    });
});