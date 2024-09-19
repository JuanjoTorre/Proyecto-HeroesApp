//FICHERO DE DEFINICION DE RUTAS

import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="marvel" element={<MarvelPage />} />
				<Route path="dc" element={<DcPage />} />


				<Route path="login" element={<LoginPage />} />


                        {/* Ruta con solo "/" que nos lleva a marvel */}
				<Route path="/" element={<Navigate to='/marvel' />} />




			</Routes>
		</>
	);
};
