import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './containers/landing/Landing';
import Registration from './containers/registration/Registration';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
