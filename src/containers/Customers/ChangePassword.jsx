import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import ProfileSideBar from "./ProfileSideBar";

export default function ChangePassword() {
  const authContext = useContext(AuthContext);
  const { authTokens } = authContext;
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleUpdatePassword = async () => {
    try {
      setError(null);
      setSuccessMessage('');
        console.log(newPassword, confirmNewPassword)
      if (newPassword !== confirmNewPassword) {
        setError('New passwords do not match');
        return;
      }

      const response = await axios.put('http://localhost:3000/v1/customers/profile/updatepassword', {
        currentPassword,
        newPassword,
        confirmNewPassword,
      }, {
        headers: {
            Authorization: `Bearer ${authTokens?.access_token}`,
        },
    });

      setSuccessMessage(response.data.message);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div>
          <ProfileSideBar />
        </div>
        <div>
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
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
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
                    value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                    className="block w-full  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* confirmation*/}
              <div>
                <label htmlFor="cnew-pass" className="block text-sm font-semibold leading-6 text-gray-900">
                  Confirm new password
                </label>
                <div className="mt-2.5">
                  <input
                    type="password"
                    value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="block w-full  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            {/* Error message */}
            {error && (
              <div className="mt-4 text-red-600">
                <p>{error}</p>
              </div>
            )}

            {/* Success message */}
            {successMessage && (
              <div className="mt-4 text-green-600">
                <p>{successMessage}</p>
              </div>
            )}

            {/* Button */}
            <div className="mt-10">
              <button
                onClick={handleUpdatePassword}
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
