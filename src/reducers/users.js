import { RECEIVE_USERS } from '../actions/users';

export default function users (state = {}, action) {
    console.log('users reducer', action.type);
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        default :
            return state
    }
    
}