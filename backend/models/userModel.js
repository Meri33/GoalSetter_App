const mongoose = require('mongoose');
  

const userModel = mongoose.Schema({
    name:{
        type : String,
        required : [true , 'please insert your name']
    },
    email :{
        type : String,
        required :[ true, ' please enter your email'],
        unique : true
    },
    password :{
        type : String,
        required :[ true, ' please enter your password']
    },
},{
    timestamps : true
})


module.exports = mongoose.model('User',userModel);