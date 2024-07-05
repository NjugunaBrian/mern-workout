import React, { useEffect, useState } from 'react'

interface Workout {
    _id: string,
    title: string,
    reps: Number,
    load: Number
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
    <div className='bg-[#f1f1f1] h-screen'>
        <div>
            {workouts && workouts.map((workout) => (
                <p key={workout._id}>{workout.title}</p>
            ))}
        </div>
    </div>
  )
}

export default Home