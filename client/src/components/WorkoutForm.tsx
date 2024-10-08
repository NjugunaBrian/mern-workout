import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutContext';
import { useAuthContext } from '../hooks/useAuthContext';

function WorkoutForm() {

    const { dispatch } = useWorkoutsContext();
    const { user } = useAuthContext();

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState<String | null>(null);
    const [emptyFields, setEmptyFields] = useState<String[]>([]);

    const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!user){
            setError('You must be logged in')
            return
        }

        const workout = { title, load, reps };

        const response = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
        });

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }

        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('New workout added', json);
            dispatch({ type: 'ADD_WORKOUT', payload: json})
        }
        
    }

  return (
    <form onSubmit={handleSubmitForm}>
        <h3 className='text-2xl'>Add a Workout</h3>

        <label className='block'>Exercise Title: </label>
        <input className={`outline outline-none block p-2 mt-2 mb-5 w-full rounded box-border ${emptyFields.includes('title') ? 'border border-[#e7195a]' : 'border border-none'}`} type='text' onChange={(e) => setTitle(e.target.value)} value={title} required />

        <label className='block'>Load (in kg): </label>
        <input className={`outline outline-none block p-2 mt-2 mb-5 w-full rounded box-border ${emptyFields.includes('load') ? 'border-2 border-[#e7195a]' : 'border border-none'}`} type='number' onChange={(e) => setLoad(e.target.value)} value={load} required />

        <label className='block'>Reps (in kg): </label>
        <input className={`outline outline-none block p-2 mt-2 mb-5 w-full rounded box-border ${emptyFields.includes('reps') ? 'border-2 border-[#e7195a]' : 'border border-none'}`} type='number' onChange={(e) => setReps(e.target.value)} value={reps} required />

        <button type='submit' className='bg-[#1aac83] rounded cursor-pointer text-white py-3 px-2'>Add Workout</button>
        {error && <div className='p-2 my-5 border-[#e7195a] text-[#e7195a] rounded bg-[#ffefef]'>{error}</div>}

    </form>
  )
}

export default WorkoutForm