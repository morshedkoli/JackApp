"use client"
import React, { useState } from 'react'

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
    <div>
         <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div style={{ border: "1px solid black", padding: "30px" }}>
        <h2>Login Page</h2>
        <div style={{ padding: "10px" }}>
          <label>Username:</label>
          <input
          onChange={handleInputChange}
          name='username'
            style={{ padding: "5px", borderRadius: "10px" }}
            type="text"
            placeholder="username"
          />
        </div>
        <div style={{ padding: "10px" }}>
          <label>Password:</label>
          <input
           onChange={handleInputChange}
           name='password'
            style={{ padding: "5px", borderRadius: "10px" }}
            type="text"
            placeholder="Password"
          />
        </div>
        <button
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "20px",
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
            cursor:'pointer'
          }}
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </div>
    </div>
  )
}

export default Login