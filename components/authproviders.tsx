"use client"

import React from 'react'
import {getProviders,signIn} from "next-auth/react"
import {useState,useEffect} from "react"
type Provider={
  id:string,
  name:string,
  type:string,
  signInUrl:string,
  callbackUrl:string,
  signInUrlParams:Record<string,string> | null;
}
type Providers=Record<string,Provider>
const authproviders = () => {
  const [providers,setProviders]=useState<Providers | null>(null)
  useEffect(()=>{
      const fetchProviders=async()=>{
        const res=await getProviders()
        console.log(res)
        setProviders(res)
        
      }
      fetchProviders()
  },[])
  if(providers){
  return (
    <div>
      <div>
          {Object.values(providers).map((provider:Provider)=>(
          <button onClick={()=>signIn("google")}>{provider.id}</button>
          ))}
      </div>
    </div>
  )
  
  }
}

export default authproviders