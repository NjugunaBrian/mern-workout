import  { useState } from 'react';
import { useAuthContext } from './useAuthContext';

function useSignUp() {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState<boolean | null | any>(null);
    const { dispatch } = useAuthContext();

    const signup = async(email: string, password: string) => {
        setLoading(true);
        setError(null)

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password }),
        })
        const json = await response.json();

        if (!response.ok){
            setLoading(false)
            setError(json.error);
        }
        if (response.ok){
            //save the user to localStorage
            localStorage.setItem('user', JSON.stringify(json));

            //update the auth context
            dispatch({ type: 'LOGIN', payload: json});

            //update loading state
            setLoading(false);
        }
    }

    return { signup, loading, error}

}

export default useSignUp