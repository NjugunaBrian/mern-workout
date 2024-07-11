import { useAuthContext } from './useAuthContext';

function useLogOut() {
    const { dispatch } = useAuthContext();

    const logOut = () => {
        localStorage.removeItem('user')

        dispatch({ type: 'LOGOUT'})
    }

    return { logOut }
}

export default useLogOut