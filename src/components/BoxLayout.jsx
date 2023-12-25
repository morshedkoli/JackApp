import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BoxLayout({service}) {

  const {image, title, location} = service;


  return (
   <Link href={location}>
    <div className='rounded-lg bg-slate-300 shadow-xl p-5 w-40 flex flex-col items-center '>
            <div className='overflow-hidden  rounded-xl w-30 h-30 '>
            <Image
              src={image}
              width={100}
              height={100}
              alt="Picture of the author"
            />
            </div>
            <h1 className='text-3xl font-semibold text-center  '>{title}</h1>
        </div>
   </Link>
  )
}

export default BoxLayout