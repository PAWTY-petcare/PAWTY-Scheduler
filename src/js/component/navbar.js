import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navigation mb-2">
			<Link to="/">
				<span className="navbar-brand mb-5 h3">Bambi-Lee Cleaning & Home Care</span>
			</Link>
			<div className="nav-buttons">
				<Link to="/login">
					<button className="btn btn-primary">Login</button>
				</Link>
				<Link to="/register">
					<button className="btn btn-primary">Register</button>
				</Link>	<Link to="/demo">
					<button className="btn btn-primary">Schedule a Cleaning</button>
				</Link>
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Account
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Bookings</a></li>
    <li><a class="dropdown-item" href="#">Inquiries</a></li>
    <li><a class="dropdown-item" href="#">Logout</a></li>
  </ul>
			</div>
		</nav>
	);
};
