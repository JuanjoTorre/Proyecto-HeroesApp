/* eslint-disable react/prop-types */
import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroLIst = ({ publisher }) => {

	//Llamo a la funcion que obtiene el listado de heroes en base a su publisher
      //La meto dentro de un useMemo para que solo se dispare cuando cambie el publisher
	const heroes =  useMemo( () => getHeroesByPublisher(publisher), [publisher] ) ;
	return (
		<div className="row rows-cols-1 row-cols-md-3 g-3">
			{heroes.map((hero) => (
				<HeroCard 
                              key={hero.id} 
                              {...hero}    //Forma de pasar todas las propiedade de hero sin escribirlas
                        />
			))}
		</div>
	);
};
