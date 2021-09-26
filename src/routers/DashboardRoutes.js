import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { Navbar } from './../components/ui/NavBar';
import { MarvelScreen } from './../components/marvel/MarvelScreen';
import { HeroeScreen } from './../components/heroes/HeroeScreen';
import { DcScreen } from './../components/dc/DcScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/marvel:heroeId" component={ HeroeScreen } /> 
                    <Route exact path="/dc" component={ DcScreen } />   

                    <Redirect to="/marvel" />
                </Switch>    
            </div>   
        </>
    )
}
