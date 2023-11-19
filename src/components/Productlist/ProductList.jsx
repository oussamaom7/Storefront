import React from 'react';
import Navbar from '../../components/Navbar';
import { SimpleSlider } from '../../components/simple slider/banner';
import ProductList from '../../components/Productlist/ProductList'; // Assuming this component requires a single product as a prop
import data from '../../mock.json';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Landing() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <SimpleSlider />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductList product={data[0]} />
          <ProductList product={data[1]} />
          <ProductList product={data[2]} />
          {/* Add more ProductList components for other products */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
