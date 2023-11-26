import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Landing from './containers/landing/Landing';
import Home from './containers/Home/Home';
import Registration from './containers/registration/Registration';
import ContactUs from './components/ContactUs';
import CategoriePage from './containers/categorie/categoriePage';
import CustomerInfoPage from './containers/Customers/CustomerInfoPage';
import OrdersPage from './containers/Customers/OrdersPage';

import Login from './containers/registration/Login';
import Card from './components/MovieCards/card';
import Ticket from './components/MovieCards/ticket';
import PaymentForm from './components/paymentsPage';
import ProductPage from './components/Productlist/productPage';

export default function App() {
  return (
    <div className="App">
   
        <Routes>
        <Route path="/card" element={<Card />}></Route>
        <Route path="/payement" element={<PaymentForm />}></Route>
        <Route path="/v1/products/:id" element={<ProductPage />}></Route>
        <Route path="/tick" element={<Ticket />}></Route>
          <Route path="/h" element={<Home />}></Route>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Registration />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>

          <Route path="/category/:id" element={<CategoriePage />}></Route>
          <Route path="/CustomerProfile" element={<CustomerInfoPage />}></Route>
          <Route path="/orders" element={<OrdersPage />}></Route>

    

          <Route path="/v1/customers/validate/:id" element={<Login />}></Route>
          <Route path="/category/:id" element={<CategoriePage />}></Route>
        </Routes>


  
   </div>
  );
}

