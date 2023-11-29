import React, { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext'; 





export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { loginCustomer, errMsg } = useContext(AuthContext);
<<<<<<< HEAD
  const checkAccountValidation = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/v1/customers/validate/${id}`);
      loginCustomer({ email, password });
      return response.data.valid_account;
    } catch (error) {
      console.error('Error checking account validation:', error);
      return false; // Default to false if there's an error or customer not found
    }
  };
=======
  // const checkAccountValidation = async (id) => {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/v1/customers/validate/${id}`);
  //     return response.data.valid_account;
  //   } catch (error) {
  //     console.error('Error checking account validation:', error);
  //     return false; // Default to false if there's an error or customer not found
  //   }
  // };
>>>>>>> c88666192439a15415ab0b450185a34dbf80716b


  const handleLogin = async (e) => {
    e.preventDefault();

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


        <div className='text-sm mb-4'><h6 href="#" className="text-blue-500">Forgot Password?</h6></div>
        {errMsg && <div className='text-red-500 mb-4'>{errMsg}</div>}
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
