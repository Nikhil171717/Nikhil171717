"use client"

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Page  = () => {
  const router=useRouter()
  
   
  return (
    <div>
      <div className='my-10 mb-20'>
        <h1>Catgory</h1>
        <h1>Posts</h1>
        LoadMore
        <Link href="/details">navigate</Link>
        <button onClick={()=>router.push("/details")}>sdfs</button>

      </div>
       </div>
  )
}

export default Page 