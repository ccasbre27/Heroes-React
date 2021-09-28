import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest // rest operator, is used only arguments
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                
                ( !isAuthenticated ) 
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to='/' /> )

            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
