"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const User = ({isLogin}:{isLogin?:boolean}) => {
 const route = useRouter()
 function Login(){
    route.push('/login')
 }
 switch(isLogin){
    case true :
        return(
         <>
         <div className="flex justify-center items-center h-11 w-11 rounded-full bg-yellow-300"></div>
         </>
        )
    default :
     return (
        <>
         <div className="section gap-2">
            <button onClick={Login} className='button border  text-neutral-800 w-[100px] '>Login</button>
            <button className='button bg-blue-500 text-white w-max px-3 '>Create Profile</button>
        </div>
        </>
     )
 }
}

export default User