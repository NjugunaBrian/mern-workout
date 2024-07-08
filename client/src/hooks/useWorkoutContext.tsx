import { useContext } from "react"
import { WorkoutsContext, WorkoutsContextType } from "../context/WorkoutContext"

export const useWorkoutsContext = (): WorkoutsContextType => {
    const context = useContext(WorkoutsContext);

    if (!context){
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider');
    }

    return context;
}