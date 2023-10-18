import React from 'react'
import { NavLinks } from '@/constants'
import AuthProviders from "@/components/authproviders"
import Link from 'next/link'
const navbar = () => {
  const session=null
  return (
    <div>
      <div className='flex justify-between items-center '>
        <div className='flex gap-10 items-center'>
          <h1 className='text-2xl font-serif font-extrabold'>Dribble</h1>
        <div className='flex gap-5 sm:hidden'>
          {NavLinks.map((e)=><Link href={e.key}>{e.title}</Link>)}
        </div>
        </div>
        <div>
          {session ? (
            <button>Share Work</button>
          ):(
           <AuthProviders/>
          )}
        </div>
      </div>
    </div>
  )
}

export default navbar