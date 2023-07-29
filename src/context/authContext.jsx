import { createContext,useEffect,useReducer } from "react";
import {projectAuth,onAuthStateChanged} from "../firebase/config"



export const AuthContext = createContext()

export const authReducer = (state,action) =>{
    switch(action.type){
        case 'LOGIN':
            return {...state,user:action.payload}
        case 'LOGOUT':
            return {...state,user:null}

        case 'AUTH_IS_READY':
            return {...state,user:action.payload,authIsReady:true}
        default:
            return state
}
}



export const AuthContextProvider = ({children}) =>{
    // return the template and inside the template we want to return the autx context 
    // 
    const [state,dispatch] = useReducer (authReducer,{
        user:null,
        authIsReady:false
    })
    useEffect(()=>{
        const unsub=onAuthStateChanged(projectAuth,(user)=>{
            // when we first connect to firebsae 
            // it is going to send back an initial response 
            // we are going to have a user or null as the value 
            // everytime there is a change it's going to change back that information 
            // if in the future the user logs in 
            // when we first fire the function we dispatch the action 
            dispatch({type:'AUTH_IS_READY',payload:user})
            unsub()

            // even in the future if it changes we have to dispatch it . we only 
            // need to do it once 
            // how to cancel this subscriptiion 
        })
    },[])
    console.log("Auth context state:",state)

    // dispatch used to update the context value 
    return (
        <AuthContext.Provider value = {{...state,dispatch}}>
            {children}
            </AuthContext.Provider>
    )
}