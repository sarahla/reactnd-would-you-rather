import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Dashboard() {
    const currentUser = useSelector(state => state.users[state.authedUser]);
    return (
        <div>
            { currentUser && <h2>Welcome, {currentUser.name}!</h2> }
        </div>
    )
}

export default Dashboard;