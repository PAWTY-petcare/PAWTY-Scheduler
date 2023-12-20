import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import BLogo from "../../image/BLogo.png";


export const Navbar = () => {
	return (
		
		<nav className="navbar mb-2">
			<Link to="/">
			 
                 <img className="logo" src={BLogo} alt="" />
           	
			</Link>
			<div className="nav-links">
				<Link to="/login">
					<button className="button btn-dark">Contact Us</button>
				</Link>
					<Link to="/schedule">
					<button className="button btn-dark">Schedule a Cleaning</button>
				</Link>
				
			</div>
		</nav>
	
	);
};
