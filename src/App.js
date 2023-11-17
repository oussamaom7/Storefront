import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './containers/landing/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import Example from './components/test';
import ProfileSideBar from './containers/Customers/ProfileSideBar';
import Home from './containers/Home/Home';


export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
   </BrowserRouter> 
  
   </div>
  );
}

