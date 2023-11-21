import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/v1/customers', formData);
  
      if (response.status === 201) {
        setResponseMessage(response.data.message);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        });
  
        // Refresh the page upon successful form submission
        window.location.reload();
      } else {
        setResponseMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  useEffect(() => {
    // You can perform additional actions based on responseMessage here
  }, [responseMessage]);

  return (
    <div className="flex justify-center items-center flex-col mx-auto">
      <form onSubmit={handleSignup}>
        {/* Input fields */}
        <div className="w-full mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-sm mb-4">
          At least 8 characters, 1 uppercase letter, 1 number & 1 symbol
        </div>
        <div>
          <button style={{ background: 'black', color: 'white' }} className=" w-full py-3 px-16 rounded-lg" type="submit">
            Submit
          </button>
        </div>
        {/* Display response message */}
        {responseMessage && (
          <div className="mt-4 text-center">
            <p>{responseMessage}</p>
          </div>
        )}
        <div className="text-sm">
          <p>
            By signing up, you agree you've read and accepted our Terms and Conditions. Please
            see our Privacy Policy for information on how we process your data.
          </p>
        </div>
      </form>
    </div>
  );
}
