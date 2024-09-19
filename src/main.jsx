//FICHERO PADRE DE LA APLICACION

import  React  from "react";

import  ReactDom  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { HeroesApp } from "./HeroesApp.jsx";
import "./styles.css";

ReactDom.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<HeroesApp />
		</BrowserRouter>
	</React.StrictMode>
);
