import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import NavbarLogo from "./NavbarLogo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);
  const [inputError,setInputError]= useState('')
  const navigate = useNavigate();
  const url = `http://localhost:3000/v1/customers/resetpassword/${token}`;


  const verifyToken =useCallback( async () => {
    try {
      const response = await axios.get(url);
      

      if(response.data.status  === 'success') {

        console.log(response.data.status)
        toast.success(response.data.message);
        setIsValidToken(true);
      } 

      if(response.data.status  === 'error')  {

        toast.error(response.data.message);
      }

    } catch (error) {

      toast.error('something went wrong');
      setIsValidToken(false);
    } 
  },[url])


  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  

  const handleResetPassword = async () => {
    try {
      if (!isValidToken) {
        toast.error('Invalid token');
        return;
      }

      if (!newPassword.trim() || newPassword.trim().length < 6) {
        setInputError('Password must not be empty and must be at least 6 characters')
        return;
      }
     
      const response = await axios.post(url,{
        newPassword:newPassword, 
        confirmNewPassword:confirmPassword
      });


      if(response.data.status  === 'success') {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } 
      if(response.data.status  === 'error')  {
        toast.error(response.data.message);
      }

 

    } catch (error) {
      toast.error(`Password reset failed: ${error.message}`);
    }
  };

  return (
    <>
    <NavbarLogo/>
    <Header/>
    <hr />
    <div className='flex flex-col mx-auto my-10 max-w-2xl w-'>
   
     
      <div>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Please set your new password
          </h2>
        </div>
        <div className='gap-x-8 gap-y-2'>
          {/* new password*/}
          <div>
            <label htmlFor="new-pass" className="block text-sm font-semibold leading-6 text-gray-900">
              New password
            </label>
            <div className="mt-2.5 relative">
              <input
                type={showNewPassword ? "password" : "text"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                onFocus={() => setShowNewPassword(true)}
                onBlur={() => setShowNewPassword(true)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {(showNewPassword || newPassword) && (
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <VscEyeClosed className="h-5 w-5 text-gray-500" />
                  ) : (
                    <VscEye className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              )}
            </div>
          </div>
          {/* confirmation*/}
          <div>
            <label htmlFor="cnew-pass" className="block text-sm font-semibold leading-6 text-gray-900">
              Confirm new password
            </label>
            <div className="mt-2.5 relative">
              <input
                type={showConfirmNewPassword ? "password" : "text"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setShowConfirmNewPassword(true)}
                onBlur={() => setShowConfirmNewPassword(true)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {(showConfirmNewPassword || confirmPassword) && (
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                >
                  {showConfirmNewPassword ? (
                    <VscEyeClosed className="h-5 w-5 text-gray-500" />
                  ) : (
                    <VscEye className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              )}
            </div>
          </div>
             {/* Error message */}
             {inputError.length>0 && (
                <div className="mt-4 text-red-600">
                  <p>{inputError}</p>
                </div>
              )}
        </div>

        {/* Button */}
        <div className="mt-10">
          <button
            onClick={handleResetPassword}
            className="block w-full rounded-md bg-color2 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-white  hover:text-color2 hover:border-2 hover:border-color2"
          >
            Reset Password
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
    <Footer/>
    </>
  );
}
