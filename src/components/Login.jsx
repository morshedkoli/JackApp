"use client"
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import Image from 'next/image';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';

function Login() {

  const [user, setUser] = useState({});


  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }


  const onLogin =async()=>{

    
    const res = await  fetch("/api/user/login",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
     })

     const data= await res.json()
    if(data.status==="success"){
      alert("Login Successfull")
      window.location.href="/dashboard"
    }

  }


  return (
   
      <div className='grid w-full h-full grid-cols-1 bg-white md:grid-cols-2'>
<div className='bg-[#16202a] text-white flex items-center justify-center flex-col '>
<div className='my-4'>
  <h1 className='text-3xl font-semibold'>Login</h1>
  <p className='mt-2 text-xs text-slate-400'>
    {' '}
    Go With Your Business Next Level</p>
</div>

<form>


<Label htmlFor="username" > UserName*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
 type="text" id="username" placeholder="Username"
 onChange={handleInputChange}
          name='username'
 />

<Label htmlFor="password" > Password*</Label>
<Input className="mt-2 mb-4 bg-transparent rounded-full"
 type="text" id="password" placeholder="Password"
 onChange={handleInputChange}
           name='password'
 />

<Button type="submit" className="w-full mt-6 bg-indigo-500 rounded-full hover:bg-indigo-700" > Login</Button>


</form>

<p className='mt-6 text-slate-500' 
>Don't Have an Account? <Link href="/user/registration">Register</Link> Here.</p>

</div>

<div className='relative hidden md:block'>
<Player
  autoplay
  loop
  src="https://lottie.host/63845016-df0d-499e-9f81-381cbfef65ba/KhlCUJMWrr.json"
  // style={{ height: '300px', width: '300px' }}
>
</Player>

</div>
      </div>
  
  )
}

export default Login