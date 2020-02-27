export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthedUser(id) {   
     /* 
     * Update user in local storage
     * Commenting this functionality out to satisfy #5 of Login Flow in rubric
     */
    localStorage.setItem('authedUser', id);
    return {
        type: SET_AUTHED_USER,
        id
    }
}