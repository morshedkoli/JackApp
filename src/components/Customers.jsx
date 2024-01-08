
async function Customers() {

  const res = await fetch(`${process.env.HOST}/api/user`);
  const data = await res.json()

  function sumBalance(arr) {
    let sum = 0;
  
    for (let obj of arr) {
      sum += obj.balance;
  
    }
    return sum;
  }
const Total = sumBalance(data.data)


function sumCreditBalance(arr) {
  let sum = 0;

  for (let obj of arr) {
    sum += obj.credit_balance;

  }

  return sum;
}

const TotalCredit = sumCreditBalance(data.data)

  return (
    <div className='p-4 shadow-lg rounded bg-gray-100 mt-10'>
    <div className='flex justify-between p-4 text-lg font-bold'>
    <h1>Customer Info</h1>
    <h2>Total Balance: {Total} </h2>

    <h2>Total Credit Balance: {TotalCredit} </h2>



    </div>
    <div>
    <div className='flex justify-between shadow-2xl p-4 mt-1 rounded bg-white'>
      <h1 className='flex-1 font-bold'>Name</h1>
        <h1 className='flex-1 font-bold'>Phone Number</h1>
        <h1 className='flex-1 font-bold'>Balance</h1>
        <h1 className='flex-1 font-bold'>Credit Balance</h1>
  </div>

{ data.status=== "fail"? <h1>There is some problem in backend</h1>:

 data["data"].map((user)=>(
  
  <div key={user.id} className='flex justify-between shadow-2xl p-4 mt-1 rounded bg-white'>
        <h1 className='flex-1'>{user.name}</h1>
        <h1 className='flex-1'>{user.phone}</h1>
        <h1 className='flex-1 font-bold'>{user.balance}</h1>
        <h1 className='flex-1 font-bold'>{user.credit_balance}</h1>
      </div>

    ))
}

</div>
  </div>
  )
}

export default Customers