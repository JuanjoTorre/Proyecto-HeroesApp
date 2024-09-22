//FICHERO DE ENTRADA A LA APLICACION

import { AppRouter } from "./router/AppRouter";
//import { Navbar } from "./ui";

export const HeroesApp = () => {
	return (
		<>
		{/* <Navbar/> */}
			{/* Llamamos al componente de routes */}
			<AppRouter />
		</>
	);
};
