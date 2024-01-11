
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import BPrint from "../../image/BPrint.png"

import "../../styles/home.css";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { videoJS } from "../store/video.js";


export const Home = () => {

	return(
 <div className="container">
	
	
	
	<section className="bambi-home"> 
<video width="500rem" height="500rem"
	autoplay muted controls
	title="BambiLeeLogoVid">
	
		 </video> 
 
	
	
	
	<h1>Bambi-Lee<br />
	                                 Cleaning<br />
									 &<br />
									 Home Care<br />
									 </h1>
	<h2>Scope of Service</h2>
	<li>For contract Commercial property routined cleaning and maintenence</li>
	<li>Airbnb/Short term rental property routined cleaning and maintenence</li>
	<li>Residential property cleaning and maintenence </li>
	<li>Organizational planning and implimentation</li> */}
		
	  <img className="bottom-left-a" src={BPrint} alt="bambiprint" />
      <img className="top-left" src={BPrint} alt="bambiprint" />
	  <img className="top-left-a" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right" src={BPrint} alt="bambiprint" />
	  <img className="top-right" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right-a" src={BPrint} alt="bambiprint" />
	  <img className="bottom-left" src={BPrint} alt="bambiprint" />
	  <img className="top-right-a" src={BPrint} alt="bambiprint" />
	  {/* <img className="bottom-left-b" src={BPrint} alt="bambiprint" />
	  <img className="top-left-b" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right-b" src={BPrint} alt="bambiprint" />
	  <img className="top-right-b" src={BPrint} alt="bambiprint" /> */}

	 </section> 
 </div>
	);
};
