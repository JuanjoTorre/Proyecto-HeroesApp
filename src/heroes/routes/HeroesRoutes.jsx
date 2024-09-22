//FICHERO DE DEFINICION DE RUTAS DE 'heroes'

import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, MarvelPage, SearchPage, HeroPage } from "../pages";


export const HeroesRoutes = () => {
	return (
		<>
			{/* Solo cuando estamos en las paginas de heroes aparecera el navbar */}
			<Navbar />

			<div className="container">
				<Routes>
					{/* Paginas de los heroes con sus paths */}
					<Route path="marvel" element={<MarvelPage />} />
					<Route path="dc" element={<DcPage />} />
					<Route path="search" element={<SearchPage />} />
					<Route path="hero" element={<HeroPage />} />

					{/* Ruta con solo "/" que nos lleva a marvel */}
					<Route
						path="/"
						element={<Navigate to="/marvel" />}
					/>
				</Routes>
			</div>
		</>
	);
};
