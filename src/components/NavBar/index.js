import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuthedUser } from '../../actions/authedUser';
import Avatar from '../Avatar';

function NavBar() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users[state.authedUser]);
    const handleLogOut = () => {
        dispatch(setAuthedUser(null));
    }
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">New Question</Link>
            <Link to="/leaderboard">Leader Board</Link>
            { 
                currentUser && 
                <Fragment>
                    <Avatar user={currentUser} width="30px" />
                    <p>Hello, {currentUser.name}</p>
                    <Link to="/login" onClick={handleLogOut}>Log Out</Link>
                </Fragment>
            }
        </nav>
    )
}

export default NavBar;