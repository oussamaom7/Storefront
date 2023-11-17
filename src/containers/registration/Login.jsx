import React from 'react'
import './LoginSignup.css';

export default function Login() {
  return (
<div className='container'>
      <div className="input">
            <input placeholder='Email Adress' type="Email"/>
      </div>
      <div className="input">
          <input placeholder='Password' type="password" />
      </div>
      <div className='privacy'>Forgot Password?</div>
      <div>
        <button className="submit-button" onClick={(e) => alert('You have successfully signed up!')}>Log in</button>
      </div>
      <div className='privacy'>
        <p>By logging in, you agree to the Terms of Service and Privacy Policy</p>
      </div>
  </div>
    
  )
}
