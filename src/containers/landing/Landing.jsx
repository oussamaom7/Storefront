import React from 'react';
import Navbar from '../../components/Navbar';
import { SimpleSlider } from '../../components/simple slider/banner';
import ProductList from '../../components/Productlist/ProductList';
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
        <div>
          <ProductList products={data} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
