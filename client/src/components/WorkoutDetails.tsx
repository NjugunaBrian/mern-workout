import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";
import { formatDistanceToNow } from "date-fns";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useAuthContext } from "../hooks/useAuthContext";

interface WorkoutProps {
    createdAt?: string | Date;
    _id: string,
    title: string,
    reps: number,
    load: number
}

function WorkoutDetails({ workout }: { workout: WorkoutProps}): JSX.Element{

    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const handleDelete = async () => {

        if (!user){
            return
        }
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user?.token}`,
            }
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
            {workout.createdAt && <p>{formatDistanceToNow(new Date(workout.createdAt.toString()), { addSuffix: true})}</p>}
            </div>
            <button onClick={handleDelete} className="flex items-center justify-center rounded-full my-14 mx-5 px-3 py-1 text-sm bg-[#f1f1f1] hover:my-12">
                <TrashIcon className="h-5 w-5" />
            </button>

        

        </div>
    )

}


export default WorkoutDetails