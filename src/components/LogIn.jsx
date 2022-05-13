import React from "react";
import { useState } from "react";
import login from "../helpers/login";
export default function LogIn() {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  return (
    <>
      LogIn<br></br>
      <label htmlFor="email">Email</label>
      <input
        onChange={(input) => setEmail(input.target.value)}
        type="text"
        name="email"
        placeholder="Please enter your email"
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={(input) => setPassword(input.target.value)}
        type="password"
        name="password"
        placeholder="Please enter your password"
      />
      <button onClick={() => login(email, password)}>Login</button>
     
    </>
  );
}
