import React, { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutContext'

interface Workout {
    _id: string,
    title: string,
    reps: number,
    load: number
}

function Home() {

    const { workouts, dispatch } = useWorkoutsContext()


    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const json: Workout[] = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json });
            }
        }

        fetchWorkouts()

    }, [dispatch])



    return (
        <div className='grid grid-cols-[3fr_1fr] gap-24'>
            <div>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
                
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home