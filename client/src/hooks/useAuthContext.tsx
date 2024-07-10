import { useContext } from "react"
import { AuthContext, AuthContextType } from "../context/AuthContext";

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context){
        throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider');
    }

    return context;
}