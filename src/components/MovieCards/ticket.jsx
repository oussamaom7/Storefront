import React from 'react';
import QRCode from 'qrcode.react';
<<<<<<< HEAD
import LogoTicket from '../../assets/LogoTicket.png'

=======

import LogoTicket from '../../assets/LogoTicket.png'


>>>>>>> main
function Ticket() {
  return (
<div class="px-4 py-2 text-gray-800">
  <div class="hidden xl:flex flex-row justify-between shadow-md border rounded-md">
    <div
<<<<<<< HEAD
=======

>>>>>>> main
      class="flex flex-col items-center justify-between w-1/4 px-4 py-2 bg-color2 border-r-2 border-gray-500 border-dashed rounded-l-md"
    >
      <div class="flex-col">
      <div style={{ backgroundColor: "#ACA7CB", padding: "10px", borderRadius: "8px" }}>
    <QRCode value="Your ticket information here" size={160} />
  </div>
<<<<<<< HEAD
=======

>>>>>>> main
        <p class="my-2 text-xs italic font-light text-gray-500">
          Scan here to check in!
        </p>
        <div class="text-xs mb-2 text-gray-600">
          <span class="text-gray-500">Valid until :</span>
          <br />
          Monday, 28 September 2020 18:30:23
        </div>
      </div>
      <div class="text-left">
        <p class="pb-2 text-xs italic">Powered By</p>
        <img
<<<<<<< HEAD
          src={LogoTicket}
          alt=""
          style={{height: "100px"}}
=======

          src={LogoTicket}
          alt=""
          style={{height: "100px"}}

>>>>>>> main
        />
      </div>
    </div>
    <div class="relative flex flex-col w-3/4 product-container" style={{height: "400px"}}>
    <img
  src="https://gcdn.imgix.net/events/wac-vs-sundowns.jpeg?w=900&h=600&fit=clip&auto=format,compress&q=80"
  alt='h'
  style={{
    objectFit: "cover", 
    width: "100%",      
    height: "100%",    
  }}
/>

      <div class="absolute p-1 bottom-24">
        <div
          class="flex flex-row px-4 py-2 text-xs font-bold text-red-800 bg-white rounded-md "
        >
          <span class="mr-2 font-normal text-gray-500">Organizer :</span>
          <p class="font-semibold text-red-800">Banua Coder</p>
        </div>
      </div>
      <div class="absolute self-end mr-1 mt-1">
        <p
          class="px-4 py-2 text-xs font-bold text-red-800 bg-white rounded-md "
        >
          <span class="font-normal text-gray-500">Ticket Number :</span>
          12
        </p>
      </div>
      <div class="absolute bottom-0 flex flex-col w-full h-24">
        <div class="w-full h-full bg-white opacity-75 rounded-br-md"></div>
        <div class="absolute flex flex-row p-2 text-gray-800 opacity-100">
          <div class="flex flex-col">
            <div class="flex flex-col">
              <p class="mb-1 text-xs text-gray-500">Start Date :</p>
              <p class="text-xs font-semibold text-red-800">
                Monday, 28 September 2020 09:00
              </p>
            </div>
            <div class="hidden md:flex flex-col mt-1">
              <p class="mb-1 text-xs text-gray-500">End Date :</p>
              <p class="text-xs font-semibold text-red-800">
                Monday, 28 September 2020 19:00
              </p>
            </div>
          </div>
          <div class="flex flex-col ml-4">
            <div class="hidden md:flex flex-col">
              <p class="mb-1 text-xs text-gray-500">Type of event :</p>
              <p class="text-xs font-semibold text-red-800">Seminar</p>
            </div>
            <div class="flex flex-col mt-1">
              <p class="mb-1 text-xs text-gray-500">Location :</p>
              <p class="text-xs font-semibold text-red-800">
                Banua Coder Coworking Space, Palu Timur, Kota Palu, Sulawesi
                Tengah
              </p>
            </div>
          </div>
          <div class="flex flex-col ml-4">
            <div class="flex flex-col">
              <p class="mb-1 text-xs text-gray-500">Ticket Owner :</p>
              <p class="text-xs font-semibold text-red-800">
                Fajrian Aidil Pratama
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:hidden flex flex-col bg-white border rounded-md shadow-md">
   <div class="py-2 px-4 flex-col flex text-center">
      <img class="mx-auto"
          src="https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a"
        alt="h"
        />
        <p class="font-bold text-lg md:text-3xl">Scan here to check in!</p>
   </div>
   <hr class="border-dashed border-2 border-gray-400"/>
   <div class="py-2 px-4 flex flex-col text-sm md:text-2xl">
     <p class="self-start font-bold text-gray-500">Mulai</p>
     <div class="flex text-sm justify-between my-2 md:text-xl">
       <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
       <p class="font-bold text-red-800">Senin, 29 September 2020</p>
     </div>
     <div class="flex text-sm justify-between my-2 md:text-xl">
       <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
       <p class="font-bold text-red-800">10:30</p>
     </div>
   </div>
   <div class="py-2 px-4 flex flex-col text-sm md:text-2xl">
     <p class="self-start font-bold text-gray-500">Selesai</p>
     <div class="flex text-sm md:text-xl justify-between my-2">
       <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
       <p class="font-bold text-red-800">Senin, 29 September 2020</p>
     </div>
     <div class="flex text-sm md:text-xl justify-between my-2">
       <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
       <p class="font-bold text-red-800">15:30</p>
     </div>
   </div>
   <div class="py-2 px-4 flex flex-col text-sm md:text-2xl">
     <p class="self-start font-bold text-gray-500">Lokasi</p>
     <div class="flex text-sm md:text-xl justify-between my-2">
       <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
       <p class="font-bold text-red-800">Banua Coder Coworking Space, Palu, Sulawesi Tengah, Indonesia</p>
     </div>
   </div>
   <hr class="border-gray-400"/>
   <div class="py-2 px-4 flex flex-col text-sm md:text-2xl">
     <p class="self-start font-bold text-gray-500">Powered By</p>
     <img
     class="mx-auto my-2"
<<<<<<< HEAD
          src={LogoTicket}
          alt=""
=======

          src={LogoTicket}
          alt=""

>>>>>>> main
        />
   </div>
  </div>
</div>
  );
}

export default Ticket;
