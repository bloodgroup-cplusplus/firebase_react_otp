import { AuthContext } from "./context/authContext";
import { useContext } from "react";

export const useAuthContext =()=>{
    const context = useContext(AuthContext)
    if(!context)
    {
        throw Error("use auth context must be inside an AuthContext Providedr")
    }

    return context
}