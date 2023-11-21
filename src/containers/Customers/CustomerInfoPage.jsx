import React from 'react';

export default function CustomerInfoPage() {
    
    return (
            <div className='container'>
                <div className="mx-auto my-8 max-w-2xl  text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Personal information</h2>
                </div>
                <div className="mx-auto max-w-xl ">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                        {/* first name */}
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={'customer first name'}
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* last name */}
                        <div>
                            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={'customer last name'}
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* email */}
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={'customer email'}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                />
                            </div>
                        </div>
                        {/* number phone */}
                        {/* <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                Phone number
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={'customer phone'}
                                    type="tel"
                                    name="phone-number"
                                    id="phone-number"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                />
                            </div>
                        </div> */}
                        {/* address */}
                        <div className="sm:col-span-2">
                            <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
                                Address
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={'customer email'}
                                    type="text"
                                    name="address"
                                    id="address"
                                    autoComplete="address"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                />
                            </div>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="my-10">
                        <button

                            value="send"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Update
                        </button>
                    </div>

                </div>
            </div>
          
    )
}
