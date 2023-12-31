"use client"
import UserForm from '@/components/UserForm'

function page() {

 




  return (
    <div className=' w-full'>
      <div className='flex flex-col justify-center items-center '>
        <h2  className='text-center uppercase font-semibold bg-white p-2 mb-2 rounded'>Create New Customer</h2>

        <UserForm/>
       
      </div>
    </div>
  )
}

export default page