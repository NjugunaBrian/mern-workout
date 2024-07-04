import { Response, Request, NextFunction } from 'express';
import Workout from '../models/workoutModel';

//get all workouts
export const getWorkouts = async(req: Request, res: Response, next: NextFunction) => {
    const workouts =  await Workout.find({}).sort({createdAt: -1});

    res.status(200).json(workouts);
}
//get a single workout

export const getWorkout = async(req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const workout = await Workout.findById(id);

    if(!workout){
        return res.status(404).json({error: "No such workout"})
    }
    res.status(200).json(workout);
}

//create a workout
export const createWorkout = async(req: Request, res: Response, next: NextFunction) => {
    const { title, reps, load } = req.body

    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);

    } catch(error : any) {
        res.status(400).json({ error: error.message})
    }
};

//delete a workout

//update a workout