import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './containers/landing/Landing';
/* import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import Example from './components/test';
import ProfileSideBar from './containers/Customers/ProfileSideBar'; */
import Home from './containers/Home/Home';
import Registration from './containers/registration/Registration';
import ContactUs from './components/ContactUs';
import CustomerInfoPage from './containers/Customers/CustomerInfoPage';


export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/h" element={<Home />}></Route>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Registration />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
   </BrowserRouter> 
  
   </div>
  );
}

