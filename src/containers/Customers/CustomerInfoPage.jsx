import React, { useContext, useEffect, useState, useCallback } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import ProfileSideBar from './ProfileSideBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CustomerInfoPage() {
    const authContext = useContext(AuthContext);
    const { authTokens } = authContext;
    const [customerProfile, setCustomerProfile] = useState({});


    const [details, setDetails] = useState({
        firstName: customerProfile?.firstName || '',
        lastName: customerProfile?.lastName || '',
        email: customerProfile?.email || '',
        address: customerProfile?.address || '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setDetails({
            firstName: customerProfile?.firstName || '',
            lastName: customerProfile?.lastName || '',
            email: customerProfile?.email || '',
            address: customerProfile?.address || '',
        });
    }, [customerProfile]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:3000/v1/customers/profile", {
                headers: {
                    Authorization: `Bearer ${authTokens?.access_token}`,
                },
            });
            if (response.status === 200) {
                setCustomerProfile(response.data);
            } else {
                setError("Failed to fetch user data.");
            }
        } catch (error) {
            setError("Error: " + error.message);
       
        }
    }, [authTokens, setCustomerProfile]);

    useEffect(() => {
        fetchData();
    }, [fetchData, authTokens]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const changedFields = {};
            Object.keys(details).forEach((field) => {
                if (details[field] !== customerProfile[field]) {
                    changedFields[field] = details[field];
                }
            });

            const response = await axios.patch('http://localhost:3000/v1/customers/profile/update', changedFields, {
                headers: {
                    Authorization: `Bearer ${authTokens?.access_token}`,
                },
            });
            toast.success('Customer updated successfully');

            console.log('Response:', response);
        } catch (error) {
            console.log(error)
            toast.error("Error: " + error.response.data.message);

        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div className="flex justify-between">
                <div>
                    <ProfileSideBar />
                </div>
                <div>
                    <form className="container" onSubmit={handleSubmit}>
                        {/* Title */}
                        <div className="mx-auto my-10 max-w-2xl text-center">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Personal informations</h2>
                        </div>
                        <div className="mx-auto max-w-xl">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                                {/* First name */}
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            onChange={handleChange}
                                            value={details.firstName || ''}
                                            type="text"
                                            name="firstName"
                                            id="first-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                {/* Last name */}
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            onChange={handleChange}
                                            value={details.lastName || ''}
                                            type="text"
                                            name="lastName"
                                            id="last-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                {/* Email address */}
                                <div className="sm:col-span-2">
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            onChange={handleChange}
                                            value={details.email || ''}
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                {/* Address */}
                                <div className="sm:col-span-2">
                        <label htmlFor="message" className="flex text-sm font-semibold leading-6 text-gray-900">
                            Address
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                onChange={handleChange}
                                value={details.address || ''}
                                type="address"
                                name="address"
                                id="address"
                                rows={3}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                
                            />
                        </div>
                    </div>
                            </div>
                            {error && <p className="text-red-500">{error}</p>}
                            <div className="my-10">
                                <button
                                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    disabled={loading}
                                >
                                    {loading ? 'Updating...' : 'Update'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div></div>
            </div>
            <ToastContainer/>
        </>
    );
}
