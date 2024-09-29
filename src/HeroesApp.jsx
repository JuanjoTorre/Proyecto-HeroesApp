//FICHERO DE ENTRADA A LA APLICACION

import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";
//import { Navbar } from "./ui";

export const HeroesApp = () => {
	return (
		<AuthProvider>
		
			{/* Llamamos al componente de routes */}
			<AppRouter />
			
		</AuthProvider>
	);
};
