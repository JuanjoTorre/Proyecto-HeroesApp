import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {

	//Llamo al useContext para extrar el usuario de donde saldra el nombre del usuraio logeado
	const {user, logout} = useContext(AuthContext);

	

	//Llamamo a un customHook 'useNavigate' creado por el equipo de 'react-router-dom' que nos sirve para gestionar todos los datos de nuestra navegacion
	const navigate = useNavigate();

	//Funcion que nos permitira hacer el logout llevandonos a la pagina de login
	const onLogaut = () => {

		logout();
		navigate('/login', {
			//El replace evita que pulsando el back podamos volver a entrar sin hacer login
			replace: true,
		});
	}
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						className={ ( { isActive } ) => `nav-item nav-link ${ isActive  ?  'active' :  '' }` } 
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink 
                        className= { ( { isActive } ) => `nav-item nav-link ${ isActive  ?  'active' :  '' }` } 
                        to="/dc"
                    >
						DC
					</NavLink>
					<NavLink 
                        className= { ( { isActive } ) => `nav-item nav-link ${ isActive  ?  'active' :  '' }` } 
                        to="/search"
                    >
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-primary">
                        {user?.name}
                    </span>
                    <button 
			  	className="nav-item nav-link btn"
				onClick={onLogaut}
			>
                       logout
                    </button>
				</ul>
			</div>
		</nav>
	);
};
