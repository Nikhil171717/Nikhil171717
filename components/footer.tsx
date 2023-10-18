import React from 'react'
import {First} from "@/constants"

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
      <div>
        <div>
          <h1 className="text-gray-600 text-2xl font-serif font-extrabold">Dribble</h1>
        </div>
        <div className='flex justify-between'>
          <FooterLinks title={First[0].title} links={First[0].links}/>
          <FooterLinks title={First[1].title} links={First[1].links}/>
          <FooterLinks title={First[2].title} links={First[2].links}/>
        </div>
      </div>
    </div>
  );
}

export default footer