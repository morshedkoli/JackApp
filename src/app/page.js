import Customers from '@/components/Customers'
import RechargeBox from '@/components/RechargeBox'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full p-4">
   
    
<div>
<div className=' bg-green-400 mb-5 p-4 flex justify-start gap-10 rounded'>
      <h1 >bKash: 5000</h1>
    <h1 >Nagad: 5000</h1>
    <h1>Rocket: 5000</h1>
      </div>
</div>

    <div className='flex justify-between'>
      
      <div className=' bg-green-400 p-4 rounded'>
        <h1 className='text-2xl text-white bold '>Balance: 5000</h1>
      </div>
      <div className=' bg-green-400 p-4 rounded'>
        <h1 className='text-2xl text-white bold '>Total Send: 5000</h1>
      </div>
      <div className=' bg-green-400 p-4 rounded'>
        <h1 className='text-2xl text-white bold '>Total Received: 5000</h1>
      </div>
      
    </div>

    <RechargeBox/>

   <Customers/>
   <Customers/>
   <Customers/>
   <Customers/>
   <Customers/>
   <Customers/>
   <Customers/>

    </div>
  )
}
