import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Landing from './containers/landing/Landing';
import Home from './containers/Home/Home';
import Registration from './containers/registration/Registration';
import ContactUs from './components/ContactUs';
import CategoriePage from './containers/categorie/categoriePage';
import Login from './containers/registration/Login';

export default function App() {
  return (
    <div className="App">
   
        <Routes>
          <Route path="/h" element={<Home />}></Route>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Registration />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/v1/customers/validate/:id" element={<Login />}></Route>
          <Route path="/category/:id" element={<CategoriePage />}></Route>
        </Routes>

  
   </div>
  );
}

