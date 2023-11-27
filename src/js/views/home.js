import React from "react";
import IMG_1062 from "../../img/IMG_1062.png";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={IMG_1062.png} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
