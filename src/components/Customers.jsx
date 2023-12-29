import React from 'react'

async function Customers() {

  const res = await fetch("http://localhost:3000/api/user");
  const data = await res.json()
  console.log(data)


  return (
    <div className='p-4 shadow-lg rounded bg-gray-100 mt-10'>
    <div className='flex justify-between p-4 text-lg font-bold'>
    <h1>Customer Info</h1>
    <h2>Total Balance</h2>
    </div>

{ data.status=== "fail"? <h1>There is some problem in backend</h1>:
 data["data"].map((user)=>(
  <div key={user.id} className='flex justify-between shadow-2xl p-4 mt-1 rounded bg-white'>
        <h1 className='flex-1'>{user.name}</h1>
        <h1 className='flex-1'>{user.phone}</h1>
        <h1 className='flex-1'>{user.pin}</h1>
        <h1 className='flex-1 font-bold'>{user.balance}</h1>
      </div>
    ))
}

    
  </div>
  )
}

export default Customers