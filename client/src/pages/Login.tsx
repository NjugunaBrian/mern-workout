import React, { useState } from 'react'
import useLogin from '../hooks/useLogin';



function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, loading, error } = useLogin();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await login(email, password);
        
    }

    return (
        <div className='p-5 max-w-md mx-auto my-10 bg-white rounded shadow-md'>
            <h3 className='text-3xl text-center font-semibold my-2'>Log In</h3>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' value={email} className='outline outline-[1px] outline-[#9e9e9e] p-3 rounded-lg' id='email' />
                <input type='password'  onChange={(e) => setPassword(e.target.value)} placeholder='Password' value={password} className='outline outline-[1px] outline-[#9e9e9e] p-3 rounded-lg' id='password' />
                <button disabled={loading} className='p-3  rounded-lg bg-[#1aac83]'>Log in</button>

                {error && <div className='p-2 my-5 border-[#e7195a] text-[#e7195a] rounded bg-[#ffefef]'>{error}</div>}
            </form>
        </div>
    )
}

export default Login