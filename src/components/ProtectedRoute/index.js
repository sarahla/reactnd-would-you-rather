import React from 'react';
import { useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';

function ProtectedRoute({component: Component, ...rest}) {
    const authedUser = useSelector(state => state.authedUser);
    return (
    <Route {...rest} render={(props) => (
        authedUser != null 
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login'}} />
    )} />
    )
}

export default ProtectedRoute;