import { RECEIVE_QUESTIONS } from '../actions/questions';
import { SAVE_QUESTION } from '../actions/questions';
import { SAVE_ANSWER } from '../actions/questions';

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION :
            return {
                ...state,
                [action.question.id]: action.question
            }
        case SAVE_ANSWER :
            const { qid, authedUser, answer } = action;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            }
        default :
            return state
    }
}