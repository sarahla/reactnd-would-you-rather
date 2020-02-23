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
    transition: color 300ms ease-out;
    
    &:not(:first-child) {
        margin-left: 1rem;
    }

    &.active {
        font-weight: bold;
        color: #EE4266;
    }

    &:hover {
        color: #540D6E;
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

const StyledAvatar = styled(Avatar)`
    margin-right: 1rem;
`;

const Greeting = styled.p`
    margin: 0;
`;

const LogOutLink = styled(StyledLink)`
    font-size: 0.75rem;
`;

function NavBar() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users[state.authedUser]);
    const handleLogOut = () => {
        dispatch(setAuthedUser(null));
    }
    return (
        <StyledNav>
            <h1>WYR...?</h1>
            { 
                currentUser && 
                <LinkWrapper>
                    <StyledAvatar user={currentUser} width="30px" />
                    <Greeting>Hello, {currentUser.name}</Greeting>
                    <LogOutLink to="/login" onClick={handleLogOut}>Log Out</LogOutLink>
                </LinkWrapper>
            }
            <LinkWrapper>
                <StyledLink exact to="/">Home</StyledLink>
                <StyledLink to="/add">New Question</StyledLink>
                <StyledLink to="/leaderboard">Leader Board</StyledLink>
            </LinkWrapper>
            
        </StyledNav>
    )
}

export default NavBar;