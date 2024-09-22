//FICHERO DE DEFINICION DE RUTAS

import {  Route, Routes } from "react-router-dom";


import { LoginPage } from "../auth";

import { HeroesRoutes } from "../heroes";

export const AppRouter = () => {
	return (
		<>

			<Routes>

				{/* Ruta del login */}
				<Route path="login" element={<LoginPage />} />

				{/* Resto de rutas que nos llevan al fichero de rutas de 'heroes' */}
				<Route path="/*" element={<HeroesRoutes />} />

			</Routes>
		</>
	);
};
