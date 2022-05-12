import React from "react";

export default function SignUp() {
  return (
    <div>
      <label htmlFor="email">Email</label>
        <input type="text" name='email' placeholder='Please enter your email'/>
        <label htmlFor="password">Password</label>
        <input type="password" name='password' placeholder='Please enter your password'/>
    </div>
  );
}
