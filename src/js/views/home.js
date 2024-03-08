
import React, { Component, useContext, useState } from "react";

import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import BPrint from "../../image/BPrint.png"
import "../../styles/home.css";
import BLogo from "../../image/BLogo.png";
import Headliner from "../../image/Headliner.png";
import Restaurant_1 from "../../image/Restaurant_1.png";
import Store_1 from "../../image/Store_1.png";
import Airbnb_1 from "../../image/Airbnb_1.png";
import Airbnb_2 from "../../image/Airbnb_2.png";
import Home_1 from "../../image/Home_1.png";
import Organize_1 from "../../image/Organize_1.png";
import Organize_2 from "../../image/Organize_2.png";
import banner from "../../image/banner.png";



export const Home = () => {


	return(
 <div className="container">
   <div className="App">
     <img className="Headliner justify-content-center" src={Headliner} alt="headliner" />
	
	 <br />
	 <div className="contactBut d-inline justify-content-sm-center">
	
	 			<Link to="/schedule"><button className="btn-dark btn-lg"><i class="fa-solid fa-calendar-days"></i> Book an Appointment</button></Link>   <button className="btn-success btn-lg"><i className="fa-solid fa-phone"></i> (786)939-4189</button>   <button className="btn-primary btn-lg"> <i class="fa-solid fa-envelope"></i> BambiLeeCHC@gmail.com</button>
</div>
	<img className="Banner" src={banner} alt="banner" />
		<br />
		<br />   
		
		<img className="Rest1" src={Restaurant_1} alt="Rest_1" />
		<img className="Store1" src={Store_1} alt="Store_1" />
		<h2>For contract commercial property routined cleaning and maintenence</h2>
		<img className="Air1" src={Airbnb_1} alt="Air_1" />
		<img className="Air2" src={Airbnb_2} alt="Air_2" />
        <h2>Airbnb/Short term rental property routined cleaning and maintenence</h2>
		<img className="Home1" src={Home_1} alt="Ho_1" />
		<h2>Residential property cleaning and maintenence </h2>
		<img className="Org1" src={Organize_1} alt="Org_1" />
		<img className="Org2" src={Organize_2} alt="org_2" />
		<h2>Organizational planning and implimentation</h2>
	  
  </div>
  

	<div className="bambi-home"> 
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
   </div>
</div>	
	);
};
