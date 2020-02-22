import React from 'react';
import { connect } from 'react-redux'
import LoginForm from '../../components/LoginForm/';

function LoginPage(props) {
    const { location } = props;
    const redirectURL = location.state && location.state.from ? location.state.from : null;
    return (
        <div>
            <h3>Log in to get started!</h3>
            <LoginForm redirectURL={redirectURL} />
        </div>
    )
}

export default connect()(LoginPage);