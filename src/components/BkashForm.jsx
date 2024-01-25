"use client"
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import Image from 'next/image';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
import swal from 'sweetalert';

function BkashForm() {

  const [transectionInfo, setTransectionInfo] = useState({});


  function handleInputChange(event) {
    const { name, value } = event.target;
    setTransectionInfo({
      ...transectionInfo,
      [name]: value,
    });
  }


  const onSend =async(e)=>{

    e.preventDefault()
    const finalData={
        number:transectionInfo.number,
        amount: parseInt(transectionInfo.amount)
    }

    const res = await  fetch("/api/transections",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
     })

     const data= await res.json()
    if(data.status==="success"){
      swal("Welldone", `You Send Money Seccessfully`, "success");
      window.location.href="/dashboard/services/bkash"
    }else if (data.status==="ins-balance"){
      swal(`Insufficent Balance `, ` There is a problem, check and send again `, "info");

    }else{
        swal(`Oh No `, ` There is a problem, check and send again `, "info");
    }

  }


  return (
   
      <div className='grid w-full h-full grid-cols-1 bg-white '>
<div className='bg-[#16202a] text-white flex items-center justify-center flex-col '>
<div className='my-4'>
  <h1 className='text-3xl font-semibold'>Bkash Send</h1>
 
</div>

<form onSubmit={onSend}>


<Label htmlFor="number" > bKash Number</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
 type="text" id="number" placeholder="Bkash Number"
 onChange={handleInputChange}
          name='number'
 />

<Label htmlFor="amount" > Amount*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
 type="number" id="amount" placeholder="amount"
 onChange={handleInputChange}
           name='amount'
 />

<Button type="submit" className="w-full mt-6 bg-indigo-500 rounded-full hover:bg-indigo-700" > Send</Button>


</form>

</div>
      </div>
  
  )
}

export default BkashForm