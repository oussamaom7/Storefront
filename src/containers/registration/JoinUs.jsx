import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import NavbarLogo from "./NavbarLogo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function JoinUs() {
    const [showSignup, setShowSignup] = useState(true);
    const [showLogin, setShowLogin] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  return (
    <>
      <NavbarLogo />
      <Header /> 
      <hr />
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto my-10">
        <div className="bg-white rounded-lg overflow-hidden shadow-md w-full">
          <div className="flex">
            <button
              className={`flex-1 py-2 focus:outline-none ${
                showLogin ? "bg-gray-200 text-gray-700" : "text-gray-500"
              }`}
              onClick={handleLoginClick}
            >
              Log In
            </button>
            <button
              className={`flex-1 py-2 focus:outline-none ${
                showSignup ? "bg-gray-200 text-gray-700" : "text-gray-500"
              }`}
              onClick={handleSignupClick}
            >
              Sign Up
            </button>
          </div>
          <div className="p-4">
            {showSignup && <Signup />}
            {showLogin && <Login />}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
