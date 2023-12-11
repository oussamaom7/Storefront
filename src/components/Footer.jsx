import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { HiHome } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
=======
import { Link } from 'react-router-dom'
>>>>>>> 8f577f3ba5ab56aa5df6137a12d867ef5e191584

export default function Footer() {

  return (
    <footer className='w-full' >
      {/* big part */}
      <div className="w-full flex flex-col p-6 items-center bg-color4 text-center dark:bg-color0 lg:text-left">
        <div className="grid lg:grid-cols-3">
          {/* about div's */}
          <div className="mb-6 mx-6 flex flex-col  justify-center">
            <h5 className="mb-2 font-medium uppercase text-color1">
              <strong>About Us</strong></h5>

            <p className="mb-4 text-color1">
            Welcome to <strong><u>XTicket</u></strong>, your ultimate gateway to unforgettable experiences! Dive into a world of seamless ticketing for films, matches, festivals, concerts, and more. Elevate your entertainment journey with XTicket – where every ticket unlocks a new adventure!
            </p>
          </div>
<<<<<<< HEAD
          {/* information */}
          <div className='flex flex-col items-center justify-center'>
        <p class="mb-4 flex items-center justify-start md:justify-start w-60">
         <HiHome className='h-5 w-5 mr-3' />
        Casablanca, Morocco
        </p>
        <p class="mb-4 flex items-center justify-start md:justify-start w-60">
          <MdEmail className='h-5 w-5 mr-3' />
          xticket.pro@gmail.com
        </p>
        <p class="mb-4 flex items-center justify-start md:justify-start w-60">
        <FaPhoneAlt className='h-5 w-5 mr-3' />
=======
          {/* lists div */}
          <div className='flex flex-col items-center justify-center'>
        <p class="mb-4 flex items-center justify-start md:justify-start w-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-3 h-5 w-5">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        Casablanca, Morocco
        </p>
        <p class="mb-4 flex items-center justify-start md:justify-start w-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-3 h-5 w-5">
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          xticket@gmail.com
        </p>
        <p class="mb-4 flex items-center justify-start md:justify-start w-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="mr-3 h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clip-rule="evenodd" />
          </svg>
>>>>>>> 8f577f3ba5ab56aa5df6137a12d867ef5e191584
          + 212 5 220-000-00
        </p>
      </div>
          {/* subscribe div's */}
          <div className='flex flex-col items-center justify-center mx-auto text-color1'>
            <div class="p-auto overflow-auto">
              <form action="">
                <div
                  class=" gap-4">
                  <div class="mb-5 flex  items-center justify-center text-color1">
                    <p class="text-color1 dark:text-color1">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
                  {/* email/button */}
                  <div className='flex justify-center'>
                    <div className="relative mr-2" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-70 border-2 rounded border-gray-300 bg-white h-10 pr-16  px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-secondary-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:placeholder:text-lg	"
                        id="exampleFormControlInput1"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="exampleFormControlInput1"

                        className="pointer-events-none absolute text-color1 left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] focus:text-lg text-secondary-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.6rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-secondary-200 dark:peer-focus:text-secondary-200"

                      >
                        Email address
                      </label>
                    </div>

                    <div className="mb-6">
                      <button
                        type="button"
                        className="bg-transparent hover:bg-color1 text-color1 h-10 font-semibold hover:text-white py-2 px-4 border border-color1 hover:border-transparent rounded"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  {/* text */}
                  <div>
                    <p>
                    Discover the best events with <strong><u>XTicket</u></strong>! Sign up for curated experiences—matches, festivals, concerts, and films. Unforgettable moments, delivered to your inbox! <strong></strong>
                    </p>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      


      {/* second part */}
      <div className="flex flex-col justify-around bg-c2 text-center dark:bg-neutral-950 lg:text-left">
        <div className="grid lg:grid-cols-3 j">
           {/* social media */}
           <div className="flex flex-col justify-center sm:mt-4 lg:mt-1">
  <div className="m-2 flex justify-center">
    <a href="#!" class="mx-8 sm:mr-4 text-c1 dark:text-neutral-200">
    <BsFacebook className='w-5 h-5' />
    </a>
    <a href="#!" className="mx-8 sm:mr-4 text-c1 dark:text-neutral-200">
    <FaInstagram className='w-5 h-5' />
    </a>
    <a href="#!" className="mx-8 sm:mr-4 text-c1 dark:text-neutral-200">
    <FaLinkedin className='w-5 h-5' />
    </a>
    <a href="#!" className="mx-8 sm:mr-4 text-c1 dark:text-neutral-200">
    <IoLogoGithub className='w-5 h-5' />
    </a>
  </div>
</div>

         {/* copyrights */}
         <div className=" p-4 w-full text-center text-c1 dark:bg-neutral-600 dark:text-neutral-200">
    © 2023 Copyright: Team Yahya
  </div>
  {/* conditions */}
  <div className="my-3  flex justify-center items-center mx-9 ">
   <Link to="/contact">
    <div className=" text-c1 hover:underline hover:cursor-pointer mx-4">Contact us</div></Link>
    <div className=" text-c1 hover:underline hover:cursor-pointer mx-4">Privacy Policy</div>
</div>
  </div>
        </div>
    
    </footer>


  )
}