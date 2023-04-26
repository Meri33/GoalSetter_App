const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors')
const connectDB = async() =>{
    try {
      let conn = await mongoose.connect(process.env.MONGO_URI )
        console.log(`MongoDB Connected : ${conn.connection.host.cyan.underline}`);
    } catch (error) {
       console.log(error); 
   
    }
}


module.exports = connectDB