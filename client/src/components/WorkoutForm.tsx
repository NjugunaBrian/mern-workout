import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext';

function WorkoutForm() {

    const { dispatch } = useWorkoutsContext();

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const workout = { title, load, reps};

        const response = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json',
            },
        });

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
        }

        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('New workout added', json);
            dispatch({ type: 'ADD_WORKOUT', payload: json})
        }
        
    }

  return (
    <form onSubmit={handleSubmitForm}>
        <h3 className='text-2xl'>Add a Workout</h3>

        <label className='block'>Exercise Title: </label>
        <input className='outline outline-none block p-2 mt-2 mb-5 w-full rounded box-border' type='text' onChange={(e) => setTitle(e.target.value)} value={title}/>

        <label className='block'>Load (in kg): </label>
        <input className='outline outline-none block p-2 mt-2 mb-5 w-full rounded box-border' type='number' onChange={(e) => setLoad(e.target.value)} value={load}/>

        <label className='block'>Reps (in kg): </label>
        <input className='outline outline-none block p-2 mt-2 mb-5 w-full rounded box-border' type='number' onChange={(e) => setReps(e.target.value)} value={reps}/>

        <button type='submit' className='bg-[#1aac83] rounded cursor-pointer text-white py-3 px-2'>Add Workout</button>
        {error && <div className='p-2 my-5 bg-black border border-pink-100 text-pink-100'>{error}</div>}

    </form>
  )
}

export default WorkoutForm