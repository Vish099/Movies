import React from "react";
import Login from "./view/login/login";
import Home from "./view/homePage/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Company from "./view/common/companyInfo/company";
function App() {
  return (
    <>
    <ToastContainer
position="bottom-left"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    <Router basename="/">
      <Routes>
      <Route exact path='/' element={<Login />} />

        <Route path="login" element={<Login/>} />
        <Route path="home" element={<Home/>} />
        <Route path="companyInfo" element={<Company/>} />
         
      </Routes>
    </Router>
    </>
  );
}

export default App;
