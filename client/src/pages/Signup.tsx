import React, { useState } from 'react'

interface FormData {
    [key: string]: string
}

function Signup() {

    const [formData, setFormData] = useState<FormData>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.id]: e.target.value});  
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formData);
    }

    return (
        <div className='p-5 max-w-md mx-auto my-10 bg-white rounded shadow-md'>
            <h3 className='text-3xl text-center font-semibold my-2'>Sign Up</h3>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <label>Email: </label>
                <input type='email' onChange={handleChange} placeholder='Email' className='outline outline-[1px] outline-[#9e9e9e] p-3 rounded-lg ' id='email' />
                <label>Password: </label>
                <input type='password'  onChange={handleChange} placeholder='Password' className='outline outline-[1px] outline-[#9e9e9e] p-3 rounded-lg' id='password' />
                <button className='p-3 rounded-lg bg-[#1aac83]'>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup