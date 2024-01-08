import SingleTransection from '@/components/SingleTransection'
import React from 'react'

async function page() {

    const res = await fetch(`${process.env.HOST}/api/transections/pending`,{
        cache:"no-store"
    });
    const data = await res.json()


  return (
    <div className="w-full p-4">
          <div className='bg-red-500 pt-2 pb-2 text-white rounded-lg'>
          <h2 className='text-center text-red font-bold text-2xl'>Total {data["data"].length} Request are Pending Now</h2>
          </div>


      {
        data["data"].map((transection)=>(
            <SingleTransection key={transection.id} data={transection}/>

        ))
      }
    </div>
  )
}

export default page