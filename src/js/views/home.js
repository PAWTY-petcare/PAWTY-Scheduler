import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import BPrint from "../../image/BPrint.png";
import "../../styles/home.css";

export const Home = () => {

	return(
 <div className="container">
	<section className="bambi-home"> <h1>Bambi-Lee<br />
	                                 Cleaning &<br />
									 Home<br />
									 Care<br />
									 </h1>
	  <img className="bottom-left-a" src={BPrint} alt="bambiprint" />
      <img className="top-left" src={BPrint} alt="bambiprint" />
	  <img className="top-left-a" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right" src={BPrint} alt="bambiprint" />
	  <img className="top-right" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right-a" src={BPrint} alt="bambiprint" />
	  <img className="bottom-left" src={BPrint} alt="bambiprint" />
	  <img className="top-right-a" src={BPrint} alt="bambiprint" />
	  <img className="bottom-left-b" src={BPrint} alt="bambiprint" />
	  <img className="top-left-b" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right-b" src={BPrint} alt="bambiprint" />
	  <img className="top-right-b" src={BPrint} alt="bambiprint" />

	</section>
 </div>
	);
};
