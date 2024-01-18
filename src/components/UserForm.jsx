"use client"

import React from 'react'
import  { useState } from 'react'
import swal from 'sweetalert';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import Image from 'next/image';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';

function UserForm() {


    const [userdata, setUserData] = useState({})


  
  
    function handleInputChange(event) {
      const { name, value } = event.target;
      setUserData({
        ...userdata,
        [name]: value,
      });
    }

    async function submitForm(e){

      e.preventDefault()

      const NewUser =  {
        name:userdata.name ,
        phone:userdata.phone,
        email: userdata.email,
        username:userdata.username,
        // balance: parseInt(userdata.balance) || 0,
        // credit_balance:parseInt(userdata.creditBalance) || 0,
        // otp:parseInt(userdata.otp) || 0,
        password:userdata.password,
        pin:parseInt(userdata.pin)

      }

     const res = await fetch("/api/user/registration",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(NewUser),
     })

     const data= await res.json()
     console.log(data)

     if(data.status==="success"){
      swal("Welcome To Ikram Telecom!", `${data.data["name"]} Are Successfully Created as Customer`, "success");

     }
    else if(data.status==="usermatch"){
      swal(`${data.data['username']} `, ` are already our Customer `, "info");
     }
     
     else{
      swal("Ohh!", `${data.data.e} Are Successfully Not Created as Customer`, "error");
     }

     
    }


  return (
    <div className='grid w-full h-full grid-cols-1 bg-white md:grid-cols-2'>
      
<div className='bg-[#16202a] text-white flex items-center  flex-col '>
  
<div className='my-4'>
  <h1 className='text-3xl font-semibold'>Registration</h1>
  <p className='mt-2 text-xs text-slate-400'>
    {' '}
    Go With Your Business Next Level</p>
</div>

<form>


<Label htmlFor="name" > Name*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
 type="text" id="name" 
 onChange={handleInputChange}
  placeholder='Name' name='name' required
 />

<Label htmlFor="phone" > Phone Number*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
 type="text" id="phone" 
 onChange={handleInputChange}
  placeholder='phone' name='phone' required
 />

<Label htmlFor="email" > Email*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
  id="phone" 
 onChange={handleInputChange}
 type="email" placeholder='Email' name='email' required
 />

<Label htmlFor="username" > Username*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
  id="phone" 
 onChange={handleInputChange}
 type="text" placeholder='username' name='username' required
 />

<Label htmlFor="password" > Password*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
 type="password" id="password" placeholder="Password"
 onChange={handleInputChange}
           name='password'
 />

<Label htmlFor="pin" > Pin*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
 type="password" id="pin" placeholder="Pin"
 onChange={handleInputChange}
           name='pin'
           required
 />

<Button type="submit" className="w-full mt-6 bg-indigo-500 rounded-full hover:bg-indigo-700" > Login</Button>


</form>

<p className='mt-6 text-slate-500' 
>Already Have an Account? <Link href="/">Login</Link> Here.</p>

</div>

<div className='relative hidden md:block'>
<Player
  autoplay
  loop
  src="https://lottie.host/be5b509b-560d-4f49-bab6-eadfe780189a/l46ueeJ6GM.json"
  style={{  width: '500px' }}
>
</Player>

</div>
      </div>
  )
}

export default UserForm