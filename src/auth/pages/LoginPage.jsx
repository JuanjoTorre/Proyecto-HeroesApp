//FICHERO DE LOGIN

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

	//Llamo al useContext
	const { login } = useContext(AuthContext)

      //Llamamo a un customHook 'useNavigate' creado por el equipo de 'react-router-dom' que nos sirve para gestionar todos los datos de nuestra navegacion
	const navigate = useNavigate();

	//Funcion que nos permitira hacer el login       
	const onLogin = () => {

		//Averiguo el lastPath grabado en el localStorage
		const lastPath = localStorage.getItem('lastPath') || '/';

		login( 'Juanjo Torre' );
		navigate( lastPath, {
			//El replace evita que pulsando el back podamos volver a entrar sin hacer login
			replace: true,
		});
	}


	return (
		<div className="container mt-5">
			<h1>Login</h1>
			<hr />
			<button 
                        className="btn btn-primary"
                        onClick={onLogin}
                  >
                        Login
                  </button>
		</div>
	);
};
