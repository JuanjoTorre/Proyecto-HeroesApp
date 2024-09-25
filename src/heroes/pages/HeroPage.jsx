//PAGINA DE HERO

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
	//Llamamos al custom  Hook useParams (creado por React router dom)
	//Nos devuelve todos los params de la url
	const { id } = useParams();

	const navigate = useNavigate();

	//Llamo a la funcion que obtiene el hero en funcion de su id
	//La meto dentro de un useMemo para que solo se dispare cuando cambie el id
	const hero = useMemo(() => getHeroById(id), [id]);

	const onNavigateBack = () => {
		navigate(-1);
	};

	//Si no existe el heroe me lleva a la pagina de Marvel
	if (!hero) {
		return <Navigate to="/marvel" />;
	}

	return (
		<div className="row mt-5">
			<div className="col-4 animate__animated animate__fadeInLeft">
				<img
					src={`/assets/heroes/${id}.jpg`}
					alt={hero.superhero}
					className="img-thumbnail"
				/>
			</div>
			<div className="col-8">
				<h3>{hero.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter Ego: </b> {hero.alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher: </b> {hero.publisher}
					</li>
					<li className="list-group-item">
						<b>First appearence: </b>{" "}
						{hero.first_appearance}
					</li>
					<h5 className="mt-3">Characters</h5>
					<p>{hero.characters}</p>
				</ul>
				<button
					className="btn btn-outline-primary"
					onClick={onNavigateBack}
				>
					Regresar
				</button>
			</div>
		</div>
	);
};
