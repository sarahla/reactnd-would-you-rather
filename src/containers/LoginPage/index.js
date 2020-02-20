import React from 'react';
import { connect } from 'react-redux'
import LoginForm from '../../components/LoginForm/';

function LoginPage() {
    return (
        <div>
            <h3>Log in to get started!</h3>
            <LoginForm />
        </div>
    )
}

export default connect()(LoginPage);