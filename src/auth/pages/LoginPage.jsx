//FICHERO DE LOGIN

import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

      //Llamamo a un customHook 'useNavigate' creado por el equipo de 'react-router-dom' que nos sirve para gestionar todos los datos de nuestra navegacion
	const navigate = useNavigate();

	//Funcion que nos permitira hacer el login       
	const onLogin = () => {
		navigate('/', {
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
