import {useEffect, useState} from "react"

import {projectAuth} from "./firebase/config"

import {useAuthContext} from "./useAuthContext"

export const useLogout =() =>{
    const[isCancelled,setisCancelled] = useState(false)
    const [error,setError] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    // we might wanna use the compnent then only logout 

    const logout = async () =>{
        setError(null)
        setIsPending(true)
        // we want to sign the user out 

        // we will use try and catch 
        // sign the user out 

        try {
            await projectAuth.signOut()
            // wait and then dispatch logout action 
            // we don't need the payload as the user becomes null 

            dispatch({type:"LOGOUT"})

            //update state 
            if(!isCancelled)
            {
                 setIsPending(false) // we finished loading 
                    setError(null)
            }



        } catch(err)
        {
            if(!isCancelled)
            {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }

    useEffect(()=>{
        // fires on initial component render
        // return a clean up function 
        // use effect function runs right away 
        // whenever the component navigats away it fires the clean up function 
        // we want to cancel whatever is going on in the background 
        //cleanup function works and we set it to false 
        // when it treis to do that is cancelled becomes true 
        // this is only gong to fire if iscancelled is false 
        // we are not allwoing state to be updated  

        return () =>setisCancelled(true)
    },[])

    return {logout,error,isPending}


}