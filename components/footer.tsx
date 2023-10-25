import React from 'react'
import {First} from "@/constants"
import Image from 'next/image'
 type Value={
  title:string,
  links:Array<string>
}

const FooterLinks=({title,links}:Value)=>
  (
    <div >
      <h1 className='text-xl font-semibold'>{title}</h1>
      <h1>{links.map((e)=><p > {e}</p>)}</h1>
    </div>
  )

const footer = () => {
  return (
    <div>
      <div >
        <div >
          <Image alt="logo-purple"  src={require("../assets/public/logo-purple.svg")} width={90} height={90} />
          <p className='flex justify-start w-64 mt-6'>Now explore the incredible features of the web development here !</p>
        </div>
        <div className='flex justify-between mt-10'>
          <FooterLinks title={First[0].title} links={First[0].links}/>
          <FooterLinks title={First[1].title} links={First[1].links}/>
          <FooterLinks title={First[2].title} links={First[2].links}/>
          <FooterLinks title={First[3].title} links={First[3].links}/>
        </div>
      </div>
    </div>
  );
}

export default footer