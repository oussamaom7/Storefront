import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './LoginSignup.css';

export default function Signup() {
  const navigate = useNavigate();  // Initialize useNavigate

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
        navigate();  // Navigate to the current route, effectively refreshing the page
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSignup}>

        <div className="input">
          <input
            placeholder="Your First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <input
            placeholder="Your Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <input
            placeholder="Your Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="privacy">
          At least 8 characters, 1 uppercase letter, 1 number & 1 symbol
        </div>
        <div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
        <div className="privacy">
          <p>
            By signing up, you agree you've read and accepted our Terms and
            Conditions. Please see our Privacy Policy for information on how we
            process your data.
          </p>
        </div>
      </form>
    </div>
  );
}
