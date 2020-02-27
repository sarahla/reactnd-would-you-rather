import {_saveQuestion, _saveQuestionAnswer} from '../utils/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_ANSWER = 'SAVE_ANSWER';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleSaveQuestion(questionInfo) {
    return (dispatch) => {
        return _saveQuestion(questionInfo)
            .then((question) =>
                dispatch(saveQuestion(question))
            )
    }
}


function saveAnswer({qid, authedUser, answer}) {
    return {
        type: SAVE_ANSWER,
        qid,
        authedUser,
        answer
    }
}

export function handleSaveAnswer(question, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        const info = {
            authedUser,
            qid: question.id,
            answer
        }

        return _saveQuestionAnswer(info)
            .then(
                dispatch(saveAnswer(info))
            )
    }
}
