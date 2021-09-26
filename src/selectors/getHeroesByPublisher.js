
import { heroes } from './../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {
    
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if( !validPublishers.includes( publisher ) ) {
        throw new Error( `Publisher "${ publisher }" is not accepted"` );
    }

    return heroes.filter( hero => hero.publisher === publisher );

}