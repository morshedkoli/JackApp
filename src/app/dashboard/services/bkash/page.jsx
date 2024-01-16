import React from 'react'

function page() {
  return (
    <div className='flex flex-col items-center w-full justify-center '>
      <h1>Bkash Cash In</h1>

      <div className='p-10 rounded-md flex gap-2 flex-col flex-wrap  shadow-lg'>
        <input className='p-2' type="text"  placeholder='Phone Number'/>
        <input className='p-2' type="text"  placeholder='Amount'/>
        <input className='p-2' type="text"  placeholder='type'/>
        
        <button className='bg-green-600 w-full p-2 text-white font-semibold uppercase'>send</button>
      </div>
    </div>
  )
}

export default page