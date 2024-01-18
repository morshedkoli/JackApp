import BkashForm from '@/components/BkashForm'
import { CommonForm } from '@/components/CommonForm'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col items-center w-full justify-center '>
{/* 
      <div className='p-10 rounded-md flex gap-2 flex-col flex-wrap  shadow-lg'>
        <input className='p-2' type="text"  placeholder='Phone Number'/>
        <input className='p-2' type="number"  placeholder='Amount'/>
        
        <button className='bg-green-600 w-full p-2 text-white font-semibold uppercase'>send</button>
      </div> */}

      <BkashForm/>
    </div>
  )
}

export default page