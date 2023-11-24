import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Landing from './containers/landing/Landing';
import Home from './containers/Home/Home';
import Registration from './containers/registration/Registration';
import ContactUs from './components/ContactUs';
import CategoriePage from './containers/categorie/categoriePage';
import ProductPage from './containers/product/ProductPage';

export default function App() {
  return (
    <div className="App">
   
        <Routes>
          <Route path="/h" element={<Home />}></Route>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Registration />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/category/:id" element={<CategoriePage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
        </Routes>

  
   </div>
  );
}

