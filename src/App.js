import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Landing from './containers/landing/Landing';
import Home from './containers/Home/Home';
import Registration from './containers/registration/Registration';
import ContactUs from './components/ContactUs';
import CategoriePage from './containers/categorie/categoriePage';
<<<<<<< HEAD
=======


>>>>>>> 8f577f3ba5ab56aa5df6137a12d867ef5e191584
import CustomerInfoPage from './containers/Customers/CustomerInfoPage';
import OrdersPage from './containers/Customers/OrdersPage';
import Login from './containers/registration/Login';

import Card from './components/MovieCards/card';
import Ticket from './components/MovieCards/ticket';
import PaymentForm from './components/paymentsPage';
import ProductPage from './components/Productlist/productPage';
import ChangePassword from './containers/Customers/ChangePassword';
import ShoppingPanel from './components/shoppingPanel';
<<<<<<< HEAD

import ShoppingCartProvider from './context/ShoppingCartContext';
=======
// import ShoppingCartProvider from './context/ShoppingCartContext';


import ImageUpload from './components/imageUpdate';




import ImageUpload from './components/imageUpdate';


>>>>>>> 8f577f3ba5ab56aa5df6137a12d867ef5e191584

import ResetPassword from './containers/registration/ResetPassword'

// import ShoppingCartProvider from './context/ShoppingCartContext';






export default function App() {
  return (
    <div className="App">
<<<<<<< HEAD


<ShoppingCartProvider>

=======
  {/* <ContactUs/> */}
>>>>>>> 8f577f3ba5ab56aa5df6137a12d867ef5e191584
        <Routes>
        <Route path="/image" element={<ImageUpload />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="/payement" element={<PaymentForm />}></Route>
        <Route path="/v1/products/:id" element={<ProductPage />}></Route>
        <Route path="/tick/:id" element={<Ticket />}></Route>
          <Route path="/h" element={<Home />}></Route>
          <Route path="/" element={<Landing />}></Route>

          <Route path="/login" element={<Registration />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
<<<<<<< HEAD
=======

>>>>>>> 8f577f3ba5ab56aa5df6137a12d867ef5e191584
          <Route path="/shipping" element={<ShoppingPanel />}></Route>
          <Route path="/category/:id" element={<CategoriePage />}></Route>
          <Route path="/CustomerProfile" element={<CustomerInfoPage />}></Route>
          <Route path="/orders" element={<OrdersPage />}></Route>
          <Route path="/changePassword" element={<ChangePassword />}></Route>
          <Route path="/v1/customers/validate/:id" element={<Login />}></Route>
          <Route path="/category/:id" element={<CategoriePage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/resetpassword/:token" element={<ResetPassword />} />

        </Routes>
     
   </div>
  );
}
