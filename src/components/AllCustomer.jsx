import ControlledAccordions from './ControlledAccordions';

async function AllCustomer() {

  const res = await fetch(`${process.env.HOST}/api/user/allcustomer`)
  const data = await res.json()


  function sumBalance(arr) {
    let sum = 0;
  
    for (let obj of arr) {
      sum += obj.balance;
  
    }
    return sum;
  }

  
  function sumCreditBalance(arr) {
    let sum = 0;
  
    for (let obj of arr) {
      sum += obj.credit_balance;
  
    }
  
    return sum;
  }

  const totalBalance = sumBalance(data["data"]);
  const totalCreditBalance = sumCreditBalance(data["data"]);


  return (
    <div className='p-4 shadow-lg rounded bg-gray-100 mt-10'>
    <div className='flex justify-between p-4 text-lg font-bold'>
    <h1>Customer Info</h1>
    <h2>Total Balance: {totalBalance}</h2>
    <h2>Total Credit Balance Limit : {totalCreditBalance}</h2>
    </div>

{ data.status=== "fail"? <h1>There is some problem in backend</h1>:
 data["data"].map((user)=>(
  <div key={user.id} className='flex justify-between  mt-1 '>
        <ControlledAccordions user={user} />
      </div>
    ))
}

    
  </div>
  )
}

export default AllCustomer;