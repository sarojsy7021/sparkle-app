import React from 'react';
import './App.css';
//import Footer from "./components/Footer";
import Header from "./components/Header";
import All from "./pages/Home/Home"
import Blog from "./pages/Blog/index"
import Business from "./pages/Business/business"
import eCommerce from "./pages/eCommerce/eCommerce"
import News from "./pages/News/News"
import Education from "./pages/Education/education"
import Other from "./pages/Others/Other"

import {
  BrowserRouter, 
  Route, 
  Routes
 } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
         <Header />
           <Routes>
           {/* <Route exact path="/" element={<All/>} /> */}
           <Route exact path="/Blog" element={<Blog/>} />
           <Route exact path="/Business" element={<Business/>} />
           <Route exact path="/eCommerce" element={<eCommerce/>} />
           <Route exact path="/News" element={<News/>} />
           <Route exact path="/Education" element={<Education/>} />
           <Route exact path="/Other" element={<Other/>} />

           </Routes>
         {/* <Footer /> */}
       </BrowserRouter>
    </>
  );
}