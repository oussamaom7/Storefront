import React, { useEffect, useRef, useState } from "react";
import QRCode from "qrcode.react";
import LogoTicket from "../../assets/LogoTicket.png";
import { useParams } from "react-router-dom";
import axios from "axios";
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import ReactToPrint from "react-to-print";
import NavbarLogo from "../../containers/registration/NavbarLogo";

function Ticket() {
  const { id } = useParams();
  const [qrData, setQRData] = useState(null);
  const [ticketData, setTicketData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const pdfContainer = useRef();
  const [loader, /* setLoader */] = useState(false);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/v1/orders/${id}`
        );
        console.log(response.data);
        setTicketData(response.data);
        const { _id, customer_id } = response.data;
        const qrPayload = {
          orderId: _id,
          customerId: customer_id._id,
          firstName: customer_id.firstName,
          lastName: customer_id.lastName,
        };
        setQRData(JSON.stringify(qrPayload));

        setIsLoading(false);
      } catch (error) {
        setError("Error fetching ticket data: " + error.message);
        setIsLoading(false);
      }
    };

    fetchTicketData();
  }, [id]);

  const downloadPDF = () => {
    window.print();
  };

  return (
    <>
    <NavbarLogo/>
    <div className="px-40 py-2 text-gray-800">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        ticketData &&
        ticketData.order_items &&
        ticketData.order_items.map((order, index) => (
          <div>
            <ReactToPrint
              trigger={() => (
                <button
                className="flex items-center rounded-md bg-color2 px-5 py-2.5 text-center text-sm font-medium text-color0 hover:bg-color0 hover:text-color2 hover:border focus:outline-none focus:ring-4 focus:ring-blue-300"
                  // className="receipt-modal-download-button"
                  onClick={downloadPDF}
                  disabled={loader}
                >Download
                  {/* {loader ? <span>Downloading</span> : <span>Download</span>} */}
                </button>
              )}
              content={() => pdfContainer.current}
            />
            <div
              key={index}
              ref={pdfContainer}
              className=" flex  justify-between shadow-md border rounded-md mt-5"
            >
              <div class="flex flex-col items-center justify-between w-1/4 px-4 py-2 bg-color2 border-r-2 border-gray-500 border-dashed rounded-l-md">
                <div class="flex-col">
                  <div style={{background:"#FF6C22", padding: "10px", borderRadius: "8px" }}>
                    {qrData && (
                      // <QRCode value={`${qrData},itemId:${order.id}`} size={160} />
                      <QRCode
                        value={JSON.stringify({
                          orderId: ticketData._id,
                          customerId: ticketData.customer_id._id,
                          firstName: ticketData.customer_id.firstName,
                          lastName: ticketData.customer_id.lastName,
                          itemId: order.id,
                        })}
                        size={160}
                      />
                    )}
                  </div>

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
                  <img src={LogoTicket} alt="" style={{ height: "100px" }} />
                </div>
              </div>

              <div
                class="relative flex flex-col w-3/4 product-container"
                style={{ height: "400px" }}
              >
                <img
                  src={order.product_image}
                  alt="h"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div class="absolute p-1 bottom-24">
                  <div class="flex flex-row px-4 py-2 text-xs font-bold text-red-800 bg-white rounded-md ">
                    <span class="mr-2 font-normal text-gray-500">
                      Organizer :
                    </span>
                    <p class="font-semibold text-red-800">Banua Coder</p>
                  </div>
                </div>
                <div class="absolute self-end mr-1 mt-1">
                  <p class="px-4 py-2 text-xs font-bold text-red-800 bg-white rounded-md ">
                    <span class="font-normal text-gray-500">Ticket Id :</span>
                    {order.id}
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
                        <p class="mb-1 text-xs text-gray-500">
                          Type of event :
                        </p>
                        <p class="text-xs font-semibold text-red-800">
                          {order.product_name}
                        </p>
                      </div>
                      <div class="flex flex-col mt-1">
                        <p class="mb-1 text-xs text-gray-500">Location :</p>
                        <p class="text-xs font-semibold text-red-800">
                          Banua Coder Coworking Space, Palu Timur, Kota Palu,
                          Sulawesi Tengah
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-col ml-4">
                      <div class="flex flex-col">
                        <p class="mb-1 text-xs text-gray-500">Ticket Owner :</p>
                        <p class="text-xs font-semibold text-red-800">
                          {ticketData.customer_id.lastName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      {/* <div>{isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        ticketData && ticketData.order_items && ticketData.order_items.map((order, index) => (
  <div key={index} ref={pdfContainer}  class="xl:hidden flex flex-col bg-white border rounded-md shadow-md">
   <div class="py-2 px-4 flex-col flex text-center">
   {qrData && (
        <QRCode value={qrData} size={160} />
      )}
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

          src={order.product_image}
          alt=""
          style={{height: "400px",
                 width:"100%"}}
        />
   </div>
  
  </div>)))} */}
      {/* </div> */}
    </div>
    </>
  );
}

export default Ticket;
