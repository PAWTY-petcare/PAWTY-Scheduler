import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import BLogo from "../../image/BLogo.png";

export const Navbar = () => {
	
	return (

  <nav className="nav-container">
      <img className="BleeLogo" src={BLogo} alt="bleelogo"></img>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="menu-tog">MENU</span>
      </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
     <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li>
        <a href="#" className="nav-link py-3 border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home">
	         <Link to="/">
	         <button className="btn btn-tertiary d-inline-flex align-items-center" type="button">
            Home
           </button>
	         </Link>
	      </a>
      </li>
      <li>
	      <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
	       <Link to="/login">
	         <button className="btn btn-tertiary d-inline-flex align-items-center" type="button">
            Contact Us
           </button>
         </Link>
		    </a>
      </li>
      <li>
	      <Link to="/schedule">
	       <button className="btn btn-tertiary d-inline-flex align-items-center" type="button">
         Booking Request
         </button>
	      </Link>
      </li>
	   </ul>
  
   </div>
</nav>

	
	);
};
