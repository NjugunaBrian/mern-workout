import express from 'express';
import { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } from '../controllers/workoutController';
import requireAuth from '../middleware/requireAuth';


const router = express.Router();

router.use(requireAuth);

router.get('/', getWorkouts)

//get a single workout
router.get('/:id', getWorkout);

//post a new workout
router.post('/', createWorkout);

//delete a workout
router.delete('/:id', deleteWorkout);

//update a workout
router.patch('/:id', updateWorkout);

export default router