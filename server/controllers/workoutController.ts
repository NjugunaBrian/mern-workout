import { Response, Request, NextFunction } from 'express';
import Workout from '../models/workoutModel';
import mongoose from 'mongoose';

//get all workouts
export const getWorkouts = async(req: Request, res: Response, next: NextFunction) => {
    const workouts =  await Workout.find({}).sort({createdAt: -1});

    res.status(200).json(workouts);
}
//get a single workout

export const getWorkout = async(req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such workout"})
    }

    const workout = await Workout.findById(id);

    if(!workout){
        return res.status(404).json({error: "No such workout"})
    }
    res.status(200).json(workout);
}

//create a workout
export const createWorkout = async(req: Request, res: Response, next: NextFunction) => {
    const { title, reps, load } = req.body

    let emptyFields = [];

    if(!title){
        emptyFields.push('title');
    }
    if (!reps){
        emptyFields.push('reps')
    }
    if (!load){
        emptyFields.push('load')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields})
    }

    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);

    } catch(error : any) {
        res.status(400).json({ error: error.message})
    }
};

//delete a workout
export const deleteWorkout = async(req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such workout"})
    };

    const workout = await Workout.findOneAndDelete({ _id: id });
    if(!workout){
        return res.status(404).json({error: "No such workout"})
    }

    res.status(200).json(workout);

};

//update a workout
export const updateWorkout = async(req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such workout"})
    };

    const workout  = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
    if(!workout){
        return res.status(404).json({error: "No such workout"})
    };
    res.status(200).json(workout);

}