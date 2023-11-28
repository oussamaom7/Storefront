import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

export default function ChangePassword () {
   const [currentPassword,setCurrentPassword]=useState("");
   const [newPassword,setNewPassword]= useState("");
   const [confirmPassword, setConfirmPassword]=useState("");


   useEffect(() => {
    setDetails({
        id: customer?.id || '',
    });
}, [customer]);


   const handleUpdatePassword = async() =>{
    try {
        const response = await axios.put('http://localhost:3000/v1/customers/changePassword',details);
        console.log(response.data.message)
    } catch (error) {
        console.error()
    }
   }

   
    return(
        <div className="mx-auto my-8 max-w-xl sm:mt-20">
        <div className="mx-auto mt-20 mb-8 max-w-2xl  text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Change password</h2>
        </div>
        <div className=' gap-x-8 gap-y-2'>
            {/* current password */}
            <div>
                <label htmlFor="current-pass" className="block text-sm font-semibold leading-6 text-gray-900">
                    Current password
                </label>
                <div className="mt-2.5">
                    <input
                        type="password"
                        name="currentPassword"
                        id="current-pass"
                        className=" w-full block rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            {/* new password*/}
            <div>
                <label htmlFor="new-pass" className="block text-sm font-semibold leading-6 text-gray-900">
                    New password
                </label>
                <div className="mt-2.5">
                    <input
                        type="password"
                        name="newPassword"
                        id="new-pass"
                        className="block w-full  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            {/* confirmation*/}
            <div >
                <label htmlFor="cnew-pass" className="block text-sm font-semibold leading-6 text-gray-900">
                    Confirm new password
                </label>
                <div className="mt-2.5">
                    <input
                        type="password"
                        name="confirmPassword"
                        id="cnew-pass"
                        className="block w-full  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </div>
        {/* Button */}
        <div className="mt-10">
                <button
                    value="send"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Change Password
                </button>
            </div>
    </div>
    )
}