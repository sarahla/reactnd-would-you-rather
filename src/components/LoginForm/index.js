import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';

function LoginForm() {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const state = useSelector( state => {
        return {
            ...state,
            userIds: Object.keys(state.users)
            }
        }  
    );

    const handleChange = (e) => {
        const user = e.target.value;
        setUser(user);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setAuthedUser(user));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select onChange={handleChange}>
                    <option defaultValue disabled>Select a User</option>
                    {
                        state.userIds.map( userId => {
                            return <option key={userId} value={userId}>{state.users[userId].name}</option>
                        })
                    }
                </select>
                <button
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    )   
}

export default LoginForm;