import React, { useState } from 'react'

interface FormData {
    [key: string]: string
}

function Login() {

    const [formData, setFormData] = useState<FormData>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.id]: e.target.value});  
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formData);
    }

    return (
        <div className='px-3 py-2 max-w-lg mx-auto h-screen'>
            <h3 className='text-3xl text-center font-semibold my-2'>Log In</h3>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <input type='email' onChange={handleChange} placeholder='Email' className='outline outline-none p-3 rounded-lg' id='email' />
                <input type='password'  onChange={handleChange} placeholder='Password' className='outline outline-none p-3 rounded-lg' id='password' />
                <button className='p-3 rounded-lg bg-[#1aac83]'>Log in</button>
            </form>
        </div>
    )
}

export default Login