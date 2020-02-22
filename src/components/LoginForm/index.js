import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { setAuthedUser } from '../../actions/authedUser';

function LoginForm(props) {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const { redirectURL } = props;
    let history = useHistory();

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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setAuthedUser(user));
        redirectURL ? history.push(redirectURL) : history.push('/');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select defaultValue="null" onChange={handleChange}>
                    <option value="null" disabled>Select a User</option>
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