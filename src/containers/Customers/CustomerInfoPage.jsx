import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

export default function CustomerInfoPage() {
    const authContext = useContext(AuthContext);
    const { customer } = authContext;

    const [details, setDetails] = useState({
        firstName: customer?.firstName || '',
        lastName: customer?.lastName || '',
        email: customer?.email || '',
        address: customer?.address || '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setDetails({
            firstName: customer?.firstName || '',
            lastName: customer?.lastName || '',
            email: customer?.email || '',
            address: customer?.address || '',
        });
    }, [customer]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.patch('http://localhost:3000/v1/customers/profile/update', details);
            console.log(response);
            // Handle the response as needed
        } catch (error) {
            setError('An error occurred. Please try again.'); // Set an error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="container" onSubmit={handleSubmit}>
            <div className="mx-auto my-8 max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Personal information</h2>
            </div>
            <div className="mx-auto max-w-xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                onChange={handleChange}
                                value={details.firstName}
                                type="text"
                                name="firstName"
                                id="first-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                onChange={handleChange}
                                value={details.lastName}
                                type="text"
                                name="lastName"
                                id="last-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                onChange={handleChange}
                                value={details.email}
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {/* Add other input fields as needed */}
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
    );
}
