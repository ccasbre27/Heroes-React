import React, { useMemo } from 'react'
import { getHeroesByPublisher } from './../../selectors/getHeroesByPublisher';
import { heroes } from './../../data/heroes';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher )
    , [ publisher ])
     
    return (
        <div className="container animate__animated animate__fadeIn">
           {
               heroes.map( heroe => {
                   return (
                    <HeroCard 
                        key={ heroe.id }
                            { ...heroe } />
                   )
               } )
           } 
        </div>
    )
}
