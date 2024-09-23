/* eslint-disable react/prop-types */
import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";

export const HeroLIst = ({ publisher }) => {
	const heroes = getHeroesByPublisher(publisher);
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
