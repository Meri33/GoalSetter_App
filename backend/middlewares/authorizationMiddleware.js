const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandler  = require('express-async-handler');
const dotenv = require('dotenv')



const protect = asyncHandler(  async (req,res,err,next)  => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1];
            let decode  = jwt.verify(token,process.process.env.APP_SECRET);

           req.user = await User.findById(decode.id);
           next();

        } catch (error) {
            console.log(error);
          res.status(401)
          throw new Error('Not authorized')  
        }
    }
    if(!token){
        res.status(401)
            throw new Error('Not authorized , no token found')
        
    }
})


module.exports = protect;