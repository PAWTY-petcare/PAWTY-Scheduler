import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import BLogo from "/workspaces/Bambi-Lee-CHC/src/img/BLogo.png";


export const Navbar = () => {
	return (
		
		<nav className="navbar mb-2">
			<Link to="/">
			 
                 <img className="logo" src={BLogo} alt="" />
           	
			</Link>
			<div className="nav-links">
				<Link to="/login">
					<button className="button btn-primary">Login</button>
				</Link>
					<Link to="/schedule">
					<button className="button bi-calendar2-plus">Login</button>
				</Link>
				
			</div>
		</nav>
	
	);
};
