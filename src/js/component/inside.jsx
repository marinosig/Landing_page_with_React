import React from "react";

//include images into your bundle
import Card from "./card.jsx";

//create your first component
const Inside = () => {
	return (
		<div
			className="container-fluid py-5"
			style={{ backgroundColor: "#e5e5e5" }}>
			<p> TESTE </p>
			<Card />
		</div>
	);
};

export default Inside;
