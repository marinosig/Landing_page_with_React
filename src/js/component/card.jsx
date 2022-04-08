import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Cards
const Card = () => {
	return (
		<div className="card text-center" style={{ width: "18rem" }}>
			<div className="card-body">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chevrolet_Celta_2013_in_Uruguay.jpg/300px-Chevrolet_Celta_2013_in_Uruguay.jpg"
					style={{ width: "240px", height: "160px" }}
				/>
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
