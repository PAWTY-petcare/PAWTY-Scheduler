import React from "react";
import BPrint from "/workspaces/Bambi-Lee-CHC/src/image/BPrint.png";
import "../../styles/home.css";

export const Home = () => (
	<section className="bambi-home">
      <img className="top-left" src={BPrint} alt="bambiprint" />
	  <img className="bottom-right" src={BPrint} alt="bambiprint" />
	  <img className="top-right" src={BPrint} alt="bambiprint" />
	  <img className="bottom-left" src={BPrint} alt="bambiprint" />
		<div className="content">
			
		</div>
	</section>
  
);
