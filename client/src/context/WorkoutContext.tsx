import React, { createContext, useReducer } from "react";

export interface WorkoutsContextType {
    workouts: Workout[];
    dispatch: React.Dispatch<any>;
}

export interface Workout {
    _id: string;
    title: string;
    reps: number;
    load: number;
}

export const WorkoutsContext = createContext<WorkoutsContextType | undefined>(undefined);

export const WorkoutsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children}) => {
    const [workouts, dispatch]  = useReducer(workoutsReducer, [])
    return (
        <WorkoutsContext.Provider value={{ workouts, dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}


//define action types
export type Action = 
    | { type: 'SET_WORKOUTS'; payload: Workout[]}
    | { type: 'ADD_WORKOUT'; payload: Workout }
    | { type: 'UPDATE_WORKOUT'; payload: Workout }
    | { type: 'DELETE_WORKOUT'; payload: Workout};

//Reducer function to manage the state changes
const workoutsReducer = (state: Workout[], action: Action): Workout[] => {
    switch (action.type){
        case 'SET_WORKOUTS':
            return action.payload;
        case 'ADD_WORKOUT':
            return [action.payload, ...state,];
        case 'UPDATE_WORKOUT':
            return state.map(workout =>
                workout._id === action.payload._id ? action.payload : workout
            );
        case 'DELETE_WORKOUT':
            return state.filter(workout => workout._id !== action.payload._id);
        default:
            return state;           
    }
}

