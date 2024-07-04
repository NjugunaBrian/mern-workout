import express from 'express';
import { createWorkout, getWorkouts, getWorkout } from '../controllers/workoutController';


const router = express.Router();

router.get('/', getWorkouts)

//get a single workout
router.get('/:id', getWorkout);

//post a new workout
router.post('/', createWorkout);

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({message: "Delete a workout"})
});

//update a workout
router.patch('/:id', (req, res) => {
    res.json({ message: "Update a workout"});
});

export default router