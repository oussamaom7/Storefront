import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer';
import {useShoppingCart} from '../../context/ShoppingCartContext'


export default function ProductPage() {

  const { id } = useParams();
  const {getItemsQuantity,increaseCarteQantity,decreaseCarteQantity}=useShoppingCart();
   const quantity = getItemsQuantity(id)
  const [productsData, setProductsData] = useState(null);
  const [/* error */, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProductsData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/v1/products/${id}`);
      setProductsData(response.data);
      setIsLoading(false); // Set loading state to false once data is fetched
    } catch (error) {
      setError("Error fetching product data: " + error.message);
      setIsLoading(false); // Set loading state to false if there's an error
    }
  }, [id]);
  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData]);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG path here */}
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="product-page">
      <Navbar />
      <Header />

      <div className="product-content py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="image-container">
                <img
                  src={productsData.product_image}
                  alt="Product"
                  className="product-image h-64 md:h-80 rounded-lg bg-gray-100 mb-4"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="product-title mb-2 leading-tight tracking-tight font-bold text-color1 text-2xl md:text-3xl">
              {productsData.product_name}
              </h2>
              <p className="product-details text-gray-500 text-sm">
                By{' '}
                <h6 href="#" className="text-color1 hover:underline">
                  ticket
                </h6>
              </p>

              <div className="product-price flex items-center space-x-4 my-4">
                <div className="price-info">
                  <span className="currency">$</span>
                  <span className="amount font-bold text-color1 text-3xl">{productsData.price}</span>
                </div>
                <div className="flex-1">
                  <p className="discount text-color2 text-xl font-semibold">Save 12%</p>
                  <p className="tax-info text-color2 text-sm">Inclusive of all Taxes.</p>
                </div>
              </div>

              <p className="product-description text-gray-500">
                {productsData.short_description}
              </p>

              <div className="product-actions flex py-4 space-x-4">
                <div className="relative">
                  <div className="quantity-label text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <div class="flex flex-row h-10 w-full rounded-lg relative bg-color2 mt-1">
    <button data-action="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-color2 h-full w-10 rounded-l cursor-pointer outline-none">
      <span class="m-auto text-2xl font-thin" onClick={()=>decreaseCarteQantity(id)}>−</span>
    </button>
    <input /* type="number" */ class=" focus:outline-none text-center w-10 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={quantity}></input>
  <button  class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-color2 h-full w-10 rounded-r cursor-pointer">
    <span class="text-2xl font-thin" onClick={()=>increaseCarteQantity(id)}>+</span>
  </button>
</div>
                </div>

                <button type="button" className="add-to-cart-btn h-14 px-6 py-2 font-semibold rounded-xl bg-color2 hover:bg-color1 text-color1 hover:text-color0">
                  Add to Cart 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap justify-center gap-6 p-4">
      <div className="w-full bg-color2 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-color1">long_description</h2>
     <div className="bg-white rounded-lg p-4">
       <p>{productsData.long_description}</p>
     </div>
     </div>
   </div>
   <Footer/>
    </div>
 
  );
}
