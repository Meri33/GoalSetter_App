const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

const colors = require('colors');
const { errorHandler } = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');
const protect = require('./middlewares/authorizationMiddleware');
const dotenv = require('dotenv').config();



port = 5000;
connectDB();



app.use('/api/goals',require('./routes/goalRoutes'));
app.use('/api/users',require('./routes/userRoutes'));


app.use(errorHandler);



app.listen(port,()=>console.log(`port started on port :${port}`.cyan.underline))