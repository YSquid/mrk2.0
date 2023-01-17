import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './components/footer/Footer.js'
import Nav from './components/nav/Nav.js'
import Home from './components/home/Home.js'
import About from './components/about/About.js'
import Product from './components/product/Product.js'
import Shop from './components/locations/Shop.js'
import Contact from './components/contact/Contact.js'


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
