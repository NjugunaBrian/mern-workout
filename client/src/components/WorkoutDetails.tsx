import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";

interface WorkoutProps {
    createdAt?: string | Date;
    _id: string,
    title: string,
    reps: number,
    load: number
}

function WorkoutDetails({ workout }: { workout: WorkoutProps}): JSX.Element{

    const { dispatch } = useWorkoutsContext();

    const handleDelete = async() => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE',
        });
        const json = await response.json()

        if (response.ok){
            dispatch({ type: 'DELETE_WORKOUT', payload: json})
        }

    }
    return(
        <div  className='bg-white rounded-lg my-5 mx-auto relative shadow-lg flex justify-between'>
            <div className="p-5">
            <h4 className="text-xl mb-2 text-[#1aac83]">{workout.title}</h4>
            <p className="text-sm text-[#555]"><strong>Load (kg): </strong>{workout.load}</p>
            <p className="text-sm text-[#555]"><strong>Reps (kg): </strong>{workout.reps}</p>
            {workout.createdAt && <p>{workout.createdAt.toString()}</p>}
            </div>
            <button onClick={handleDelete} className="flex items-center justify-center rounded-full my-14 mx-5 px-3 py-1 text-sm bg-[#f1f1f1] hover:my-12">Delete</button>

        

        </div>
    )

}


export default WorkoutDetails