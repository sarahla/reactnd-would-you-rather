import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Error404Page() {
    return (
        <div>
            <h1>Oops! This page doesn't exist.</h1>
            <p>Please <Link to="/login">Log In</Link></p>
        </div>
    )
}

export default Error404Page;