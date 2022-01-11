import React from 'react'
import "./navbar.css"
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';

function Navbar() {

  const navigate = useNavigate();
  
  function Logout(){
    localStorage.clear();
    navigate("/login");
    toast.success("Log out successfully")
  }


    return (
        <nav class="navbar navbar-expand-sm navbar-dark mb-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" onClick={() => navigate("/home")}>Movie Binger.com</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
    
          <a class="nav-link px-5" href="#" onClick={() => navigate("/companyInfo")}>Company Info</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3" href="#" onClick={Logout}>Log Out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
