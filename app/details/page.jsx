"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router=useRouter()
  return (
    <div>
      <div className="top-0 bottom-0 right-0 left-0 px-10   mx-auto bg-black/80 absolute ">
        <p
          className="text-white text-end mr-3 text-xl cursor-pointer"
          type="button"
          onClick={() => router.push("/")}
        >
          x
        </p>
        <div className="bg-white rounded-md mt-5 h-36">nikhil</div>
      </div>
      rounded-md{" "}
    </div>
  );
}

export default page