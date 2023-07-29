import { useState } from "react"
import {createUserWithEmailAndPassword,projectAuth} from "./firebase/config"
import {useAuthContext} from "./useAuthContext"

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {dispatch} = useAuthContext()
  const handleSubmit= async(e)=>{
    e.preventDefault()
    try{
      const res=await createUserWithEmailAndPassword(projectAuth,email,password)
      if(res)
      {
        alert("Panchayat Ward Email Authenticated")
        dispatchEvent({type:"LOGIN",payload:res.user})
        
      }
      if(!res)
      {
        throw new Error("Could not complete signup")
      }
    }
    catch(error)
    {
      console.log(error)
    }

  }

  return (
<div className="relative overflow-hidden">
  <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
    <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">
      <h1 className="text-3xl text-black font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-black">
        Voting for elderly made <span className="text-blue-600 dark:text-blue-500">online</span>
      </h1>
      <p className="mt-3 text-base text-gray-500">
        This is a voting system designed by the election commission of India for allowing easy and convinient votiong 
        for voters above age of 70 
      </p>

      <div className="mt-8 grid">
       
      </div> <div className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600"></div>
       <form onSubmit={handleSubmit} method="POST"> 
        <div className="mb-4">
          <label htmlFor="hs-hero-name-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Full name</span></label>
          <input type="text" id="full_name" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="email id"/>
        </div>

        <div className="mb-4">
          <label htmlFor="hs-hero-email-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Phone Number</span></label>
          <input type="password" id="user_password" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="password"/>
        </div> 

        <div className="grid">
          <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4">Authenticate</button>
        </div>
      </form>
    </div>
  </div>
<div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover"></div>
</div>

  )
}

export default Login
