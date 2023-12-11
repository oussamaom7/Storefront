<<<<<<< HEAD
import React, { useContext } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
=======
import React, { useContext} from 'react';
import { useShoppingCart } from "../context/ShoppingCartContext";
>>>>>>> 8f577f3ba5ab56aa5df6137a12d867ef5e191584
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid package
import Navbar from './Navbar';


function PaymentForm() {
  const { cartItems, subtotal } = useShoppingCart();
  const authContext = useContext(AuthContext);
  const { authTokens } = authContext;

  const orderData = {
    order_items: [],
    cart_total_price: subtotal,
  };

  // Loop through each item in the cart and handle quantity duplication
  cartItems.forEach((item) => {
    if (item.quantity > 1) {
      for (let i = 0; i < item.quantity; i++) {
        orderData.order_items.push({
          id: uuidv4(), // Generate a unique ID for each duplicated item
          product_name: item.product_name,
          product_image: item.product_image,
          price: item.price,
          order: "open",
          quantity: 1, // Set the quantity to 1 for each duplicated item
        });
      }
    } else {
      orderData.order_items.push({
        id: uuidv4(), // Generate a unique ID for each item
        product_name: item.product_name,
        product_image: item.product_image,
        price: item.price,
        order: "open",
        quantity: item.quantity,
      });
    }
  });

  const handleCreateOrder = async () => {
    try {
      await axios.post('http://localhost:3000/v1/orders', orderData, {
=======

function PaymentForm() {
  const {cartItems,subtotal}=useShoppingCart();
  const authContext = useContext(AuthContext);
  const { authTokens } = authContext;
  const orderData = {
    order_items: cartItems.map((item) => ({
      product_name: item.product_name
     
    })),
    cart_total_price: subtotal,
  };
  

  const handleCreateOrder = async () => {
    try {
      await axios.post(`http://localhost:3000/v1/orders`, orderData, {
>>>>>>> 8f577f3ba5ab56aa5df6137a12d867ef5e191584
        headers: {
          Authorization: `Bearer ${authTokens?.access_token}`,
        },
      });
      toast.success('Order placed successfully!');
    } catch (error) {
<<<<<<< HEAD
      console.error('Error creating order:', error);
=======
>>>>>>> 8f577f3ba5ab56aa5df6137a12d867ef5e191584
      toast.error('Failed to create order. Please try again.');
    }
  };
  return (
    <>
<<<<<<< HEAD
      <Navbar/>
      <hr />
=======

>>>>>>> 8f577f3ba5ab56aa5df6137a12d867ef5e191584
      <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div class="relative">
            <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li class="flex items-center space-x-3 text-left sm:space-x-4">
                <span class="font-semibold text-color1">Payment</span>
              </li>
              {/* Additional items in the payment section if needed */}
            </ul>
          </div>
        </div>
      </div>

      <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
          <p class="text-xl font-medium">Order Summary</p>
          <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cartItems.map((item) => (
              <div key={item.id} class="flex flex-col rounded-lg bg-white sm:flex-row">
                <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.product_image} alt="" />
                <div class="flex w-full flex-col px-4 py-4">
                  <span class="font-semibold">{item.product_name}</span>
                  <span class="float-right text-color1">{item.quantity}</span>
                  <p class="text-lg font-bold">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium">Payment Details</p>
          <p class="text-color1">Complete your order by providing your payment details.</p>
      

   

    

    <div class="">
      <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div class="relative">
        <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-color1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
      <div class="relative">
        <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
        <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-color1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
        </div>
      </div>
      <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
      <div class="flex">
        <div class="relative w-7/12 flex-shrink-0">
          <input type="text" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
          <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

            <svg class="h-4 w-4 text-color1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">

              <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
            </svg>
          </div>
        </div>
        <input type="text" name="credit-expiry" class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
        <input type="text" name="credit-cvc" class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
      </div>
   
      <div class="mt-6 flex items-center justify-between">

        <p class="text-sm font-medium text-color1">Total</p>
        <p class="text-2xl font-semibold text-color1">${subtotal}</p>
      </div>
    </div>

    <button class="mt-4 mb-8 w-full rounded-md bg-color2 px-6 py-3 font-medium text-color1" onClick={()=>handleCreateOrder()}>Place Order</button>

  </div>
</div>
<ToastContainer />
</>
  );
}

export default PaymentForm;
