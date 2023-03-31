const express = require('express');
const {
    getWorkout,
    getWorkouts,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../Controllers/workoutControllers');
const router = express.Router();

//GET all workouts
router.get('/', getWorkouts);

//GET singal workouts
router.get('/:id', getWorkout);

//POST all workouts
router.post('/', createWorkout);

//DELETE all workouts
router.delete('/:id', deleteWorkout);

//UPDATE all workouts
router.patch('/:id', updateWorkout);


module.exports = router;