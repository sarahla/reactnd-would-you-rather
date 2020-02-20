import { _getUsers } from '../utils/_DATA';
import { receiveUsers } from './users';

export function handleInitialUserData() {
    return ( dispatch ) => {
        return (
            _getUsers().then(( users ) => {
                dispatch(receiveUsers(users));
            })
        )
    }
}

// export function handleInitialQuestionData() {
//     return ( dispatch ) => {
//         return (
//             _getQuestions().then(( questions ) => {
//                 dispatch(receiveQuestions(questions))
//             })
//         )
//     }
// }