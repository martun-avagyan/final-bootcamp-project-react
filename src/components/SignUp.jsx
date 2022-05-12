import React from "react";
import register from "../helpers/register";
import { useState } from "react";
import { auth } from "../api/firebaseConfig";
export default function SignUp() {
    const [email, setEmail] = useState(``)
    const [password, setPassword] = useState(``)
     return (
    <>
      <label htmlFor="email">Email</label>
      <input onChange={(input) => setEmail(input.target.value)} type="text" name="email" placeholder="Please enter your email" />
      <label htmlFor="password">Password</label>
      <input onChange={(input) => setPassword(input.target.value)}
        type="password"
        name="password"
        placeholder="Please enter your password"
      />
      
      <button onClick={() => register(email, password)}>Register</button>
    </>
  );
}
