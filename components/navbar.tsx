import React from 'react'
import { NavLinks } from '@/constants'
import AuthProviders from "@/components/authproviders"
import Link from 'next/link'
import Image from 'next/image'
const navbar = () => {
  const session=null
  return (
    <div>
      <div className='flex justify-between items-center '>
        <div className='flex gap-10 items-center'>
          <Link href="/" >
            <Image  alt="logo" src={require("../assets/public/logo.svg")} width={90} height={90} />
          </Link>
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