const AsyncHandler = require('express-async-handler');
const Goal = require('../models/goalModels')
const User = require('../models/userModel')


const getGoals = AsyncHandler(async(req,res)=>{
    if(!req.body.text){
        throw new Error('plz add text field')
    }
    const text = await Goal.find({User:req.user.id})
    res.status(200).json({
    text
    })
});


const postGoals = AsyncHandler( async (req,res)=>{
   if(!req.body.goal){
res.status(400);
throw new Error('plz add text filed')
   };
   const goals = await Goal.create({
    goal :req.body.goal,
    user:req.user.id
   })
    res.status(200).json({goals})
});

// const user = User.findById(req.user.id)

// if(!user) {
//     res.status(401)
//     throw new Error('User not found')

// }

// if(Goal.user.toString()  !==user.id){
//     res.status(401)
//     throw new Error('User not authorized')
// }
const updateGoals = AsyncHandler(async(req,res)=>{
    const checkGoal = await Goal.findById(req.params.id)
    if(!checkGoal ){
        res.status(404)
        throw new Error('Goal not found')
    }
   const updateGoals = await Goal.findByIdAndUpdate(req.params.id, req.body,{new : true,}) 
   res.status(200).json({updateGoals})
});



const deleteGoals = AsyncHandler( async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(404)
        throw new Error('goal not found')

    }
   await goal.deleteOne();
    res.status(200).json({
       _id : goal.id
    })
});



module.exports = {updateGoals,postGoals,deleteGoals,getGoals}
