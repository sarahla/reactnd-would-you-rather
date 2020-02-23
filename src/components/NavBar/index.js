import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuthedUser } from '../../actions/authedUser';
import  styled from 'styled-components';
import { Flex, Box } from 'reflexbox/styled-components';
import Avatar from '../Avatar';

const StyledLink = styled(NavLink)`
    color: #888888;
    text-decoration: none;
    
    &:not(:first-child) {
        margin-left: 1rem;
    }

    &.active {
        font-weight: bold;
        color: #EE4266;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-content: center;
    min-height: 60px;
    border-bottom: 1px solid #ddd;
`;

const LinkWrapper = styled(Flex)`
    align-items: center;
`;

const Greeting = styled.p`
    margin-left: 1rem;
`;

function NavBar() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users[state.authedUser]);
    const handleLogOut = () => {
        dispatch(setAuthedUser(null));
    }
    return (
        <StyledNav>
            <LinkWrapper>
                <StyledLink exact to="/">Home</StyledLink>
                <StyledLink to="/add">New Question</StyledLink>
                <StyledLink to="/leaderboard">Leader Board</StyledLink>
            </LinkWrapper>
            { 
                currentUser && 
                <LinkWrapper>
                    <Avatar user={currentUser} width="30px" />
                    <Greeting>Hello, {currentUser.name}</Greeting>
                    <StyledLink to="/login" onClick={handleLogOut}>Log Out</StyledLink>
                </LinkWrapper>
            }
        </StyledNav>
    )
}

export default NavBar;