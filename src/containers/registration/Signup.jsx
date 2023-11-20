import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

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

      if (response.status === 200) {
        console.log(response.data.message);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mx-auto">
      <form onSubmit={handleSignup}>
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
          <button style={{background:"black", color:"white"}} className=" py-3 px-16 rounded-lg" type="submit">
            Submit
          </button>
        </div>
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
