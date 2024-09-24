//Helper para obtener el heroe de un id pasado por parametros

import {heroes} from '../data/heroes';

export const getHeroById = ( id ) => {


      return heroes.find( hero => hero.id === id );
}