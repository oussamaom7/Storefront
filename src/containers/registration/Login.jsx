import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext'; 
import axios from 'axios'
import { Navigate } from 'react-router-dom';

import axios from 'axios'



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errmsg,setErrmsg] =  useState('');

 

  const { loginCustomer, errMsg } = useContext(AuthContext);
  const checkAccountValidation = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/v1/customers/validate/${id}`);
      return response.data.valid_account;
    } catch (error) {
      console.error('Error checking account validation:', error);
      return false; // Default to false if there's an error or customer not found
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const isAccountValidated = await checkAccountValidation(email);

    if (!isAccountValidated) {
      setErrmsg('Account is not validate validated. Please validate your account.');
      return; // Prevent further execution of the login process
    }
    try {
      await loginCustomer({ email, password });
    } catch (error) {
      // Handle login errors if needed
      console.error('Login error:', error);
    }
  };

  return (
    <div className='flex justify-center items-center flex-col mx-auto'>
      <form onSubmit={handleLogin}>
        <div className="w-full mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg"
            placeholder='Email Address'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg"
            placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='text-sm mb-4'><h6 href="#" className="text-blue-500">Forgot Password?</h6></div>
        {errMsg && <div className='text-red-500 mb-4'>{errMsg}</div>}
        {errmsg && <div className='text-red-500 mb-4'>{errmsg}</div>}

        <div>
          <button className="bg-black w-full text-white text-base py-3 px-16 rounded-lg">
            Log in
          </button>
        </div>
        <div className='text-sm'>
          <p>By logging in, you agree to the Terms of Service and Privacy Policy</p>
        </div>
      </form>
    </div>
  )
}
