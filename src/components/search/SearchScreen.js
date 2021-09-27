import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { HeroCard } from '../heroes/HeroCard';
import { heroes } from './../../data/heroes';
import { useForm } from './../../hooks/useForm';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const heroesFiltered = heroes;

    const [ formValues, handleInputChange ] = useForm({
        searchCriteria: q
    });

    const { searchCriteria } = formValues;

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
