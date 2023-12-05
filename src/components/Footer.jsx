import React from 'react'
import { Link } from 'react-router-dom'

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
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
    </a>
    <a href="#!" className="mx-8 sm:mr-4 text-c1 dark:text-neutral-200">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    </a>
    <a href="#!" className="mx-8 sm:mr-4 text-c1 dark:text-neutral-200">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    </a>
    <a href="#!" className="mx-8 sm:mr-4 text-c1 dark:text-neutral-200">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
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