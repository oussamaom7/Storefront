import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext'; 
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { loginCustomer, errMsg } = useContext(AuthContext);


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginCustomer({ email, password });
    } catch (error) {
      // Handle login errors if needed
      console.error('Login error:', error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/v1/customers/forgetpassword",
        {
          email: email,
        }
      );
      toast.success(response.data.message );
    } catch (error) {
      if (error.response.status === 404) {
        toast.error(error.response.data.message);
      }else{
        toast.error('Forgot password failed');
      }

    }
  };

  return (
    <div className='flex justify-center items-center flex-col mx-auto'>
      <form onSubmit={handleLogin}>
        <div className="w-full mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg "
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


        <div className='text-sm mb-4'><h6 href="#" className="text-blue-500 hover:underline cursor-pointer" onClick={handleForgotPassword} >Forgot Password?</h6></div>
        {errMsg && <div className='text-red-500 mb-4'>{errMsg}</div>}
        <div>
          <button className="bg-color2 w-full text-white text-base py-3 px-16 rounded-lg">
            Log in
          </button>
        </div>
        <div className='text-sm'>
          <p>By logging in, you agree to the Terms of Service and Privacy Policy</p>
        </div>
        <ToastContainer />
      </form>
    </div>
  )
}
