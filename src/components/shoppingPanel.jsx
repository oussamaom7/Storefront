import React from 'react';
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Link } from 'react-router-dom';

const ShoppingPanel = ({ isOpen }) => {
 
  const {cartItems,removeItemFromCart,closeCard,subtotal}=useShoppingCart();

  const handleRemoveItem = (id) => {
    removeItemFromCart(id); // Pass the correct item ID to remove
  };
  return (
    <div className={`relative z-20 ${isOpen ? "block" : "hidden"}`}>
    <div className="relative z-20" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-opacity-60 bg-black transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-hidden bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button type="button" className="relative -m-2 p-2 text-gray-400 hover:text-gray-500" onClick={closeCard}>
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cartItems.map(item => (
                          <li className="flex py-6" key={item.id}>
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img src={item.product_image} alt={item.product_name} className="h-full w-full object-cover object-center" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <h6 href="#">{item.product_name}</h6>
                                  </h3>
                                  <p className="ml-4">${item.price}</p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty {item.quantity}</p>

                                <div className="flex">
                                  <button type="button" className="font-medium text-color2 hover:underline" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subtotal}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                <Link to="/payement">  <h6  className="flex items-center justify-center rounded-md border border-transparent bg-color2 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:border-2 hover:text-color2 hover:border-color2" onClick={closeCard}>Checkout</h6></Link>  
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or
                      <br/>
                      <br/>
                      <button type="button" className="font-medium text-color2 hover:underline">
                          Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShoppingPanel;
