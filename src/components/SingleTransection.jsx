import Image from 'next/image'
import React from 'react'

const recharge = "https://ikramtel.in/webapp/img/Mobile%20Recharge.png"
const bKash = "https://ikramtel.in/webapp/img/bKash.png"
const Nagad = "https://ikramtel.in/webapp/img/Nagad.png"
const Rocket ="https://ikramtel.in/webapp/img/Rocket.png"




function SingleTransection({data}) {

    const {services, number, amount, type, before_balance, after_balance, status, createdAt,user}= data

    const Commission= amount*0/100
    const Cost = amount-Commission

  return (
    <div className={`flex gap-2 p-4 m-2 rounded shadow-xl`}>
    <div className='w-30 flex flex-col justify-center p-2'>
    <h3 className={`${status==="pending"? "bg-red-600":"bg-green-600"} text-slate-200 p-1 font-semibold text-center text-xl rounded-lg mb-2 capitalize`}>   {status}</h3> 

        <Image src={services==="bkash" ? bKash : services==="recharge"? recharge: services==="Nagad"? Nagad:Rocket} alt='hell' width={70} height={70}/>
        <p className='capitalize text-center'>{services}</p>
        <p className='capitalize text-center'>{type}</p>
    </div>
    <div>
       
        <h1 className='text-black font-bold text-2xl'>  {number}</h1> 
        <div className='flex gap-3'>
            <div>
                <p className='text-lg font-semibold'>Amount: {amount}</p>
               <div className='flex gap-4'> <p>Cost: {Cost}</p> <p>Commission: {Commission}</p></div>
               
            </div>
            
        </div>
        <div>
        <p>Before Balace: {before_balance} </p>
        <p>After Balance: {after_balance}</p>
        </div>
`        {/* <p>Sender Name: {user.name}</p> */}
{/* `        <p>Date : {new Date(createdAt)}</p> */}
    </div>
</div>
  )
}

export default SingleTransection