import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {

      //Recibo el name y lo conviero a minusculas y le quito los espacios
      name = name.toLocaleLowerCase().trim();
      //Si el tamaño del name es cero salgo de la funcion
      if (name.length === 0) return [];

      return heroes.filter(
            hero => hero.superhero.toLocaleLowerCase().includes(name)
      );
      
}