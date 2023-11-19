import React from 'react';
import Navbar from '../../components/Navbar';
import { SimpleSlider } from '../../components/simple slider/banner';
import ProductList from '../../components/Productlist/ProductList';
import data from '../../mock.json';

export default function Landing() {
  return (
    <>
    <div  >
      <Navbar />
      <SimpleSlider />
      <ProductList products={data}/>
    </div>
    </>
  );
}
