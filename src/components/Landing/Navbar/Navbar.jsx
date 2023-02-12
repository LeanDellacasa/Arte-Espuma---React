import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";


const Navbar = () => {
  return (

    <>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" >
          <img src="imagenes/Logo.png" alt="logo" className="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Red Lager
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Stout
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Honey
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Ipa
              </a>
            </li>            
          </ul>
          <CartWidget/>
        </div>
      </div>
    </nav>
    
  </>  
    
  );
};

export default Navbar;
