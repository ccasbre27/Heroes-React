import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { types } from '../../types/types';
import { AuthContext } from './../../auth/AuthContext';

export const Navbar = () => {

    const { user, dispatch } = useContext( AuthContext );
    
    // due to the navbar is out of the routing we should get the history in this way
    const history = useHistory(); 

    const handleLogout = () => {

        dispatch({
            action: types.logout
        });

        //localStorage.setItem('user', JSON.stringify({ logged: false }));

        // this is an async process
        history.replace('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link table-info"> 
                    { user.name }
                    </span>
                    <button 
                        className="btn nav-item nav-link" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
