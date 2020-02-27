import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { setAuthedUser } from '../../actions/authedUser';
import Button from '../Button';
import SelectField from '../SelectField';
import { Flex, Box } from 'reflexbox';

function LoginForm(props) {
    const { redirectURL } = props;
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    let history = useHistory();
    
    /* 
     * If user exists in local storage, immediately redirect
     * Commenting this functionality out to satisfy #5 of Login Flow in rubric
     */
    // const localStorageUser = localStorage.getItem('authedUser');
    // if ( localStorageUser !== ( null || 'null') ) {
    //     dispatch(setAuthedUser(localStorageUser));
    //     redirectURL ? history.push(redirectURL) : history.push('/');
    // }

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
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Flex flexDirection="column">
                    <Box mb={3}>
                        <SelectField defaultValue="null" onChange={handleChange}>
                            <option value="null" disabled>Select a User</option>
                            {
                                state.userIds.map( userId => {
                                    return <option key={userId} value={userId}>{state.users[userId].name}</option>
                                })
                            }
                        </SelectField>
                    </Box>
                    <Button
                        type="submit">
                        Sign In
                    </Button>
                </Flex>
            </form>
        </Fragment>
    )   
}

export default LoginForm;