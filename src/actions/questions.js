export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function receiveQuestions(questions) {
    //console.log('before receive questions action', questions);
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}