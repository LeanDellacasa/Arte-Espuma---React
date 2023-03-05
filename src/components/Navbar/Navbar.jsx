import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (

    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <Link to={"/"} className="navbar-brand" >
          <img src="http://localhost:3000/imagenes/Logo.png" alt="logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <NavLink className="nav-link" activeclassname={"active"} to={"/category/Roja"}>
                Cerveza Roja
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/Negra"}> 
                Cerveza Negra
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/Rubia"}>
                Cerveza Rubia
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/category/Ipa"}>
                Cerveza Ipa
              </NavLink>
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
