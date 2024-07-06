import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

interface Workout {
    _id: string,
    title: string,
    reps: number,
    load: number
}

function Home() {

    const [workouts, setWorkouts] = useState<Workout[] | null>(null)

    useEffect(() => {
        const fetchWorkouts = async() => {
            const response = await fetch('/api/workouts');
            const json = await response.json();

            if (response.ok){
               setWorkouts(json) 
            }
        }

        fetchWorkouts()

    }, [])



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