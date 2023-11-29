import React, { useCallback, useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer';

export default function ProductPage() {
  const { id } = useParams();
  const [productsData, setProductsData] = useState(null);
  const [error, setError] = useState(null);
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

  // Check for loading state and render the spinner if data is still loading
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
                  <select className="quantity-select cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg
                    className="quantity-icon w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
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
