import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import './LoginSignup.css';

export default function Registration() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  return (
    <div className='reg-container'>
      <div className='buttons'>
        <button
          className={`toggle-option ${showLogin ? 'active-button' : ''}`}
          onClick={handleLoginClick}
        >
          Log In
        </button>
        <button
          className={`toggle-option ${showSignup ? 'active-button' : ''}`}
          onClick={handleSignupClick}
        >
          Sign Up
        </button>
      </div>
      <div>
        {showSignup && <Signup />}
        {showLogin && <Login />}
      </div>
    </div>
  );
}
