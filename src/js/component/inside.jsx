import React from "react";

//include images into your bundle
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";

//create your first component
const Inside = () => {
	return (
		<div className="container-fluid py-5 container">
			<Jumbotron />
			<Card />
		</div>
	);
};

export default Inside;
