const mongoose = require('mongoose');


const goalModel = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        require: true,
        ref:'User'
    },
    goal : {
        type : String,
        required : [true, 'please enter the field']
    }
    
},{
    timestamps :true,
});


module.exports = mongoose.model('Goal',goalModel)