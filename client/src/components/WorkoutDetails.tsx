import React from "react";

interface WorkoutProps {
    createdAt?: string | Date;
    _id: string,
    title: string,
    reps: number,
    load: number
}

function WorkoutDetails({ workout }: { workout: WorkoutProps}): JSX.Element{
    return(
        <div  className='bg-white rounded-lg p-5 my-5 mx-auto relative shadow-lg'>
            <h4 className="text-xl mb-2 text-[#1aac83]">{workout.title}</h4>
            <p className="text-sm text-[#555]"><strong>Load (kg): </strong>{workout.load}</p>
            <p className="text-sm text-[#555]"><strong>Reps (kg): </strong>{workout.reps}</p>
            {workout.createdAt && <p>{workout.createdAt.toString()}</p>}

        </div>
    )

}


export default WorkoutDetails