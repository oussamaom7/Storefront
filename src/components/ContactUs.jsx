
import React, {useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';


export default function ContactUs() {
    

      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_u2xe5me', 'template_ksfmpan', form.current, '1uDRxyw1vnInqJLaS')
          .then(
            (result) => {
              console.log(result.text);
              console.log('message sent');
              form.current.reset();
                toast.success("Message sent! We will respond as soon as possible.")
              
            },
            (error) => {
              console.log(error.text);
              toast.error('Error sending message. Please try again.');
            }
          );
      };

    return (
       <div className='flex flex-col'>
            <div className='z-20'><Navbar/></div>
            <hr />
            <div className='z-20'><Header/></div>
        <div className="isolate mt-16 bg-white px-6 py-4 sm:py-8 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fd6a00] to-[#0F2C59] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
            </div>
            
        <div >
        <ToastContainer />
        </div>
      
            <form action="#" ref={form} className="mx-auto mt-8 max-w-xl sm:mt-20" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className=" flex text-sm font-semibold leading-6 text-gray-900">
                            First name {''} 
                            <h6  className="font-semibold text-red-600">*</h6>
                        </label>
                        <div className="mt-2.5">
                            <input 
                                required
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="flex text-sm font-semibold leading-6 text-gray-900">
                            Last name {''}
                            <h6  className="font-semibold text-red-600">
                                *
                            </h6>
                        </label>
                        <div className="mt-2.5">
                            <input 
                                required
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="flex text-sm font-semibold leading-6 text-gray-900">
                            Email {''}
                            <h6  className="font-semibold text-red-600">
                                *
                            </h6>
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"

                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                            Phone number
                        </label>
                        <div className="relative mt-2.5">
                            <div className="absolute inset-y-0 left-0 flex items-center justify-center ">
                                <label htmlFor="country" className="sr-only">
                                    Country
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    className=" h-full rounded-md border-0  bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm"
                                >
                                    <option>MA</option>
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                </select>
                            </div>
                            <input
                                type="tel"
                                name="phone-number"
                                id="phone-number"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-28 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="flex text-sm font-semibold leading-6 text-gray-900">
                            Message {''}
                            <h6  className="font-semibold text-red-600">
                                *
                            </h6>
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                required
                                name="message"
                                id="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    
                </div>
                <div className="mt-10">
                    <button
                 
                    value="send"
                        className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold  text-white bg-color2 hover:bg-white  hover:text-color2 hover:border-2 hover:border-color2"
                    >
                        Let's talk
                    </button>
                </div>
                
            </form>
           
        </div>
         <Footer/>
       </div>
    )
}
