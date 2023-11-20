import React from 'react';

export default function Login() {
  return (
    <div className='flex justify-center items-center flex-col mx-auto'>
      <div className="w-full mb-4">
        <input className="w-full px-4 py-2 border rounded-lg" placeholder='Email Address' type="email" />
      </div>
      <div className="w-full mb-4">
        <input className="w-full px-4 py-2 border rounded-lg" placeholder='Password' type="password" />
      </div>
      <div className='text-sm mb-4'><a href="#" className="text-blue-500">Forgot Password?</a></div>
      <div>
        <button className="bg-black text-white text-base py-3 px-16 rounded-lg" onClick={(e) => alert('You have successfully signed up!')}>Log in</button>
      </div>
      <div className='text-sm'>
        <p>By logging in, you agree to the Terms of Service and Privacy Policy</p>
      </div>
    </div>
  )
}
