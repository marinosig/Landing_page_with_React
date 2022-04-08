//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";
import Footer from "./component/footer.jsx";
import Inside from "./component/inside.jsx";

//render your react application

ReactDOM.render(
	<>
		<Navbar />
		<Jumbotron />
		<Card />
		<Inside />
		<Footer />
	</>,
	document.querySelector("#app")
);

//ReactDOM.render(<Home />, document.querySelector("#app"));
// ReactDOM.render(<Jumbotron />, document.querySelector("#app"));
