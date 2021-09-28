import React, { useContext } from 'react'
import { types } from '../../types/types';
import { AuthContext } from './../../auth/AuthContext';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext )

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Carlie Brown'
            }
        });
        
        history.replace( '/' );
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ handleLogin }>
                    Login
            </button>
        </div>
    )
}
