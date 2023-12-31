"use client"

import React from 'react'
import  { useState } from 'react'
import swal from 'sweetalert';

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
      swal("Welcome Ikram Telecom!", `${data.data["name"]} Are Successfully Created as Customer`, "success");

     }
     if(data.status==="usermatch"){
      swal(`${data.data['username']} `, ` are already our Customer Please Login`, "info");
     }
     
     else{
      swal("Ohh!", `${data.data.e} Are Successfully Not Created as Customer`, "error");
     }

     
    }


  return (
    <>
         <form onSubmit={submitForm} className='w-100 rounded bg-green-100 p-4'>
         <div className='flex shadow p-2 mb-2 rounded-lg'>
         <label className='flex-1 p-1 ' htmlFor="name">Name:</label>
          <input onChange={handleInputChange} className='flex-1 p-1 rounded ' type="text" placeholder='Name' name='name' required/>
         </div>

         <div className='flex shadow p-2 mb-2 rounded-lg'>
         <label className='flex-1 p-1 ' htmlFor="phone">Phone:</label>
          <input onChange={handleInputChange} className='flex-1 p-1 rounded ' type="text" placeholder='phone' name='phone' required/>
         </div>

         <div className='flex shadow p-2 mb-2 rounded-lg'>
         <label className='flex-1 p-1 ' htmlFor="email">Email:</label>
          <input onChange={handleInputChange} className='flex-1 p-1 rounded ' type="email" placeholder='Email' name='email' required/>
         </div>


         <div className='flex shadow p-2 mb-2 rounded-lg'>
         <label className='flex-1 p-1' htmlFor="username">User Name:</label>
          <input onChange={handleInputChange} className='flex-1 p-1 rounded ' type="text" placeholder='User Name' name='username' required/>
         </div>
{/* 
         <div className='flex shadow p-2 mb-2 rounded-lg'>
         <label className='flex-1 p-1' htmlFor="balance">Balance:</label>
          <input onChange={handleInputChange} className='flex-1 p-1 rounded ' type="number" placeholder='Balance' name='balance' defaultValue="0" required/>
         </div>

         <div className='flex shadow p-2 mb-2 rounded-lg'>
         <label className='flex-1 p-1' htmlFor="credit-balance">Credit Balance:</label>
          <input onChange={handleInputChange} className='flex-1 p-1 rounded ' type="number" placeholder='Credit Balance' defaultValue="0" name='creditBalance' required/>
         </div> */}

         <div className='flex shadow p-2 mb-2 rounded-lg'>
         <label className='flex-1 p-1' htmlFor="password">Password:</label>
          <input onChange={handleInputChange} className='flex-1 p-1 rounded ' type="password" placeholder='Password' name='password' required/>
         </div>


         <div className='flex shadow p-2 mb-2 rounded-lg'>
         <label className='flex-1 p-1' htmlFor="pin">Pin:</label>
          <input onChange={handleInputChange} className='flex-1 p-1 rounded ' type="number" placeholder='Pin' name='pin' required/>
         </div>

         <button type='submit' className='w-full bg-green-400 p-2 rounded-md font-bold uppercase'>Submit</button>


        </form>
    </>
  )
}

export default UserForm