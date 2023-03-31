require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

//express app
const snf = express();

//middleware
snf.use(express.json());
snf.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

//routes
snf.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for request
        snf.listen(process.env.PORT, ()=>{
        console.log('connected db & listeneing on port ',process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log(error);
    })



