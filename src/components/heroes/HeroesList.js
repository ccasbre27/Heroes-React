import React from 'react'
import { getHeroesByPublisher } from './../../selectors/getHeroesByPublisher';
import { heroes } from './../../data/heroes';

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher );

    return (
        <ul>
           {
               heroes.map( heroe => {
                   return (
                    <li key={ heroe.id }>
                       { heroe.superhero }
                    </li>
                   )
               } )
           } 
        </ul>
    )
}
