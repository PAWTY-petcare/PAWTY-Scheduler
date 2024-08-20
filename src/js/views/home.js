
import React, { Component, useContext, useState } from "react";

import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import BPrint from "../../image/BPrint.png"
import "../../styles/home.css";
import BLogo from "../../image/BLogo.png";
import Headliner from "../../image/Headliner.png";
import Commercial from "../../image/Commercial.gif";
import Organized from "../../image/Organized.gif";
import Residential from "../../image/Residential.gif";
import ShortProp from "../../image/ShortProp.gif";
import banner from "../../image/banner.gif";
import Komorebi from "../../image/Komorebi.gif";
import ResCard from "../../image/ResCard.png";
import ShortpropCard from "../../image/ShortpropCard.png";
import OrganizedCard from "../../image/OrganizedCard.png";
import CommCard from "../../image/CommCard.png";


export const Home = () => {


	return(
 <div className="container">
  <div className="App">
     <img className="Headliner justify-content-center" src={Headliner} alt="headliner" />
	
	
	    <div className="contactBut d-inline justify-content-sm-center">
	      <Link to="/schedule"><button className="btn-dark btn-lg"><i className="fa-solid fa-calendar-days"></i></button></Link>   
        <Link to="/login"><button className="btn-success btn-lg"><i className="fa-solid fa-phone" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover"></i></button></Link>
        <Link to="/login"><button className="btn-primary btn-lg"> <i className="fa-solid fa-envelope"></i></button></Link>
      </div>
   <div className="scope-of-service">
    	<img className="Banner" src={banner} alt="banner" />
   </div>
<div className="card-group">
<div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="card">
	    <img src={Commercial} className="card-img-top" alt="comm" />
         <div className="card-body">
               <img src={CommCard} className="card-img-bod" alt="commcard" />
        </div>
      </div>
    </div>
   <div className="carousel-item">
     <div className="card">
	     <img src={ShortProp} className="card-img-top" alt="short" />
        <div className="card-body">
            <img src={ShortpropCard} className="card-img-bod" alt="shortpropcard" />
        </div>
     </div>
    </div>
   <div className="carousel-item">
    <div className="card">
	    <img src={Residential} className="card-img-top" alt="res" />
       <div className="card-body">
            <img src={ResCard} className="card-img-bod" alt="rescard" /> 
       </div>
     </div>
    </div>
   <div className="carousel-item">
    <div className="card">
	   <img src={Organized} className="card-img-top" alt="org" />
       <div className="card-body">
           <img src={OrganizedCard} className="card-img-bod" alt="organizedcard" /> 
       </div>
    </div>
      
  </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="mission">
      <img className="Mission" src={Komorebi} alt="komorebi" />
   </div>
 
  

  
</div>
</div>


		

	

  

	<div className="bambi-home"> 
       {/* <img className="bottom-left-a" src={BPrint} alt="bambiprint" /> */}
      <img className="top-left" src={BPrint} alt="bambiprint" /> 
	  <img className="top-left-a" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right" src={BPrint} alt="bambiprint" />
	  {/* <img className="top-right" src={BPrint} alt="bambiprint" /> */}
	  <img className="bottom-right-a" src={BPrint} alt="bambiprint" />
	  {/* <img className="bottom-left" src={BPrint} alt="bambiprint" /> */}
	  {/* <img className="top-right-a" src={BPrint} alt="bambiprint" />  */}
	   {/* <img className="bottom-left-b" src={BPrint} alt="bambiprint" />
	  <img className="top-left-b" src={BPrint} alt="bambiprint" />
  {/* <img className="bottom-right-b" src={BPrint} alt="bambiprint" /> */}
	 {/* <img className="top-right-b" src={BPrint} alt="bambiprint" />  */}
 </div>
 </div>
	);
};
