import { useAuthContext } from './useAuthContext';
import { useWorkoutsContext } from './useWorkoutContext';

function useLogOut() {
    const { dispatch } = useAuthContext();
    const { dispatch: workoutsDispatch } = useWorkoutsContext();

    const logOut = () => {
        localStorage.removeItem('user')

        dispatch({ type: 'LOGOUT'})
        workoutsDispatch({ type: 'SET_WORKOUTS', payload: null})
    }

    return { logOut }
}

export default useLogOut