import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { HeroCard } from '../heroes/HeroCard';
import { heroes } from './../../data/heroes';
import { useForm } from './../../hooks/useForm';
import { getHeroesByName } from './../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchCriteria: q
    });

    const { searchCriteria } = formValues;

    // only occurs when enter is pressed because we're changing this value only on handleSearch
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ]);
    
    const handleSearch = ( e ) => {
        e.preventDefault();
        history.push( `?q=${ searchCriteria }` );
    }

    return (
        <div>
            <h1>Search Scren</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control" 
                            name="searchCriteria"
                            autoComplete="off"
                            value={ searchCriteria }
                            onChange={ handleInputChange } />
                    </form>
                    <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary">
                            Search...
                    </button>
                </div>

                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    { 
                        ( q === '') 
                        && 
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    { 
                        ( q !== '' && heroesFiltered.length === 0 ) 
                        && 
                        <div className="alert alert-warning">
                            There is not any hero that matches
                        </div>
                    }


                    {
                        heroesFiltered.map( hero => {
                            return (
                                <HeroCard 
                                    key={ hero.id }
                                    { ...hero }
                                />
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}
