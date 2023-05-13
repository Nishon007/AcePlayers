import React from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import { Routes, Route, Redirect, Navigate } from "react-router-dom";
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
function App() {
  return (<>
  <Navbar/>

    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/service' element={<Service />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route render={()=>{<Navigate to='/'/>}}/>
    </Routes>


  </>);
}

export default App;
