
import React, { Component, useContext, useState } from "react";

import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import BPrint from "../../image/BPrint.png"
import "../../styles/home.css";
import BLogo from "../../image/BLogo.png";



export const Home = () => {


	return(
 <div className="container">
	
	
	<div className="App">
    
	<div id="carouselExampleIndicators" className="carousel slide">
  
  <div className="carousel-inner">
    <div className="carousel-item active">
	<h1>Bambi-Lee<br />
	     Cleaning<br />
		    &<br />
		Home Care<br /></h1> 
    </div>
  <div className="carousel-item">
	<h1>Scope of Service</h1>
	  <ul classname="ul-m">
		<li>For contract Commercial property routined cleaning and maintenence</li>
		<li>Airbnb/Short term rental property routined cleaning and maintenence</li>
		<li>Residential property cleaning and maintenence </li>
		<li>Organizational planning and implimentation</li>
	  </ul>
  </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
	<section className="bambi-home"> 
      {/* <img className="bottom-left-a" src={BPrint} alt="bambiprint" />
      <img className="top-left" src={BPrint} alt="bambiprint" /> */}
	  <img className="top-left-a" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right" src={BPrint} alt="bambiprint" />
	  <img className="top-right" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right-a" src={BPrint} alt="bambiprint" />
	  {/* <img className="bottom-left" src={BPrint} alt="bambiprint" />
	  <img className="top-right-a" src={BPrint} alt="bambiprint" /> */}
	   {/* <img className="bottom-left-b" src={BPrint} alt="bambiprint" />
	  <img className="top-left-b" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right-b" src={BPrint} alt="bambiprint" />
	  <img className="top-right-b" src={BPrint} alt="bambiprint" />  */}

	 </section> 
 </div>
 </div>
		
	);
};
