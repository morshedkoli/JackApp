"use client"
import React, { useState, useEffect } from 'react'; // Import React for JSX and hooks
import ControlledAccordions from './ControlledAccordions';

function AllCustomer() {
  const [data, setData] = useState(null); // State to manage fetched data
  const [error, setError] = useState(null); // State for potential errors

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.HOST}/api/user/allcustomer`);
        const responseData = await res.json();
        if (responseData.status === 'success') {
          setData(responseData.data);
        } else {
          setError('There is some problem in backend');
        }
      } catch (error) {
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  const sumBalance = (arr) => arr.reduce((sum, obj) => sum + obj.balance, 0);
  const sumCreditBalance = (arr) => arr.reduce((sum, obj) => sum + obj.credit_balance, 0);

  return (
    <div className='p-4 shadow-lg rounded bg-gray-100 mt-10'>
      <div className='flex justify-between p-4 text-lg font-bold'>
        <h1>Customer Info</h1>
        {data && ( // Conditionally render only if data is present
          <>
            <h2>Total Balance: {sumBalance(data)}</h2>
            <h2>Total Credit Balance Limit: {sumCreditBalance(data)}</h2>
          </>
        )}
      </div>

      {error ? ( // Display error message if present
        <h1>{error}</h1>
      ) : data ? ( // Render customers only if data is available
        data.map((user) => (
          <div key={user.id} className='flex justify-between mt-1'>
            <ControlledAccordions user={user} />
          </div>
        ))
      ) : ( // Show a loading indicator while data is being fetched
        <p>Loading customer data...</p>
      )}
    </div>
  );
}

export default AllCustomer;
