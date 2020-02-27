import React from 'react';
import { connect } from 'react-redux'
import LoginForm from '../../components/LoginForm/';
import { Flex } from 'reflexbox';

function LoginPage(props) {
    const { location } = props;
    const redirectURL = location.state && location.state.from ? location.state.from : null;
    return (
        <Flex flexDirection="column" width="300px" alignSelf="center" margin="auto">
            <h2>Log in to get started!</h2>
            <LoginForm redirectURL={redirectURL} />
        </Flex>
    )
}

export default connect()(LoginPage);