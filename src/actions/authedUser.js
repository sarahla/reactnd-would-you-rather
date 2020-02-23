export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthedUser(id) {   
    localStorage.setItem('authedUser', id);
    return {
        type: SET_AUTHED_USER,
        id
    }
}