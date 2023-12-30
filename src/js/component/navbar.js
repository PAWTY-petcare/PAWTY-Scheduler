import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import BLogo from "../../image/BLogo.png";



export const Navbar = () => {
	
	return (

<div className="nav-container">
<div className="d-flex flex-column flex-shrink-0 bg-body-tertiary">
    <a href="/" className="d-block p-3 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
     
      <span className="visually-hidden">Icon-only</span>
    </a>
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">

	<a href="#" className="nav-link py-3 border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home" data-bs-original-title="Home">
	<Link to="/">
	  <img className="BleeLogo" src={BLogo} alt="bleelogo" />
	  </Link>
	  </a>
    
	  <li>
	  <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
	  <Link to="/login">
	  <button className="btn btn-primary d-inline-flex align-items-center" type="button">
       Contact Us
       </button>
        </Link>
		</a>
	</li>
	<li>
	<Link to="/schedule">
	<button class="btn btn-primary d-inline-flex align-items-center" type="button">
    Booking Request
  </button>
	</Link>
	</li>
    </ul>
  </div>
</div>
		
	
	 /* <ul classNameName="nav nav-pills nav-fill p-1 small rounded-5 shadow-sm" id="pillNav3" role="tablist" >
		
	 	<Link to="/">
     		<button classNameName="nav-link rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
	 		</Link>
		
		
	 	<Link to="/login">
     		<button classNameName="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact Us</button>
	 		</Link>
		
	 	<Link to="/schedule">
    	<button classNameName="nav-link rounded-5" id="schedule-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Schedule a Cleaning</button>
	 		</Link>
		
	</ul> */
	
	
	);
};
